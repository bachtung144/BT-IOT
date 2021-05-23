import React, {useState, useEffect} from 'react';
import {View, Text, Picker, FlatList, TouchableOpacity ,ActivityIndicator,Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from "./style";
import {ItemDevice} from "../../components/itemDevice";
import {ItemAddDevice} from "../../components/itemAddDevice";
import MqttService from "../../core/services/MqttService";
import OfflineNotification from "../../core/components/OfflineNotification";
import userApi from "../../service/api/userApi";
import listRoomApi from "../../service/api/listRoomApi";

export const Home = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState(null);
  const [listRoom, setListRoom] = useState(null);
  const [listDevice, setListDevice] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  const handleListRoom = async () => {
    try {
      let params = {
        idUser: '609a4840b0a865a1dbd45f9a'
      };
      const response = await listRoomApi.getAll(params);
      const {rooms} = response
      setListRoom(rooms)
    } catch (error) {
      console.log('Failed to login: ', error);
      setListRoom(null)
    }
  }

  useEffect(() => {
    handleListRoom().then(
        () => {
          MqttService.connectClient(
              mqttSuccessHandler,
              mqttConnectionLostHandler,
          );
        }
    )
  },[])

  const mqttSuccessHandler = () => {
    console.log('connected to mqtt');
    MqttService.subscribe('listDevice', msg => {
      console.warn(msg)
      setListDevice(JSON.parse(msg))
    });
    setIsConnected(true)
    if (selectedValue === null)
      MqttService.publishMessage('getListDevice', JSON.stringify({idRoom:listRoom[0]?._id}))
  };

  const mqttConnectionLostHandler = () => {
    setIsConnected(false)
  };

  const renderItem = ({item,index}) => (
    index > listDevice?.length - 1 ?
      <ItemAddDevice navigation={navigation}/>
     : <ItemDevice
      device={item?.name}
      status={item?.status}
      type={item.type}
      handleNavigate={
        item?.type === 'Air'
          ? () => navigation.navigate('AirDevice', {nameDevice: item?.name})
          : () =>
            navigation.navigate('SwitchDevice', {nameDevice: item?.name})
      }
    />
  );

  const onValueChange = (itemValue) => {
    console.warn(itemValue)
    setSelectedValue(itemValue)
    MqttService.publishMessage('getListDevice', JSON.stringify({idRoom:itemValue}))
  }

  return (
    <View style={{flex: 1}}>
      {/*Header*/}
      {!isConnected && <OfflineNotification />}
      <View style={{marginHorizontal: 10}}>

        {
          listRoom ?
              <View
                  style={styles.ctnPicker}>
                <Picker
                    // a
                    onValueChange={onValueChange}>
                  {listRoom?.map(item => <Picker.Item label={item?.name_room}
                                                      value={item?._id}
                                                      key={item?._id}/>)}
                </Picker>
              </View>
              : <ActivityIndicator size="large" />
        }

        {
          listDevice ?
              <FlatList
                  style={{marginTop: 30}}
                  numColumns={2}
                  columnWrapperStyle={{marginBottom: 20}}
                  data={[...listDevice,'item']}
                  renderItem={renderItem}
                  keyExtractor={item => item.id}
              />
              : <ActivityIndicator size="large" />
        }
        {/*<Button onPress={() => MqttService.publishMessage('getListDevice',JSON.stringify({*/}
        {/*  idRoom:'609a47e6b0a865a1dbd45f98'*/}
        {/*}))} title={'test'}/>*/}
      </View>
    </View>
  );
};
