import React, {useState, useEffect, useCallback} from 'react';
import {View, Text, Picker, FlatList, TouchableOpacity ,ActivityIndicator,Button} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from "./style";
import {ItemDevice} from "../../components/itemDevice";
import {ItemAddDevice} from "../../components/itemAddDevice";
import OfflineNotification from "../../components/OfflineNotification";
import userApi from "../../service/api/userApi";
import listRoomApi from "../../service/api/listRoomApi";
import prgMqtt from "../../service/mqtt/MqttLog";

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
      setListRoom(null)
    }
  }

  useEffect(() => {
    handleListRoom().then(
        () => {
          prgMqtt(mqttSuccessHandler, mqttConnectionLostHandler, onMessageArrived)
        }
    )
  },[])

  const onMessageArrived = (message) => {
    console.log("onMessageArrived:"+message.payloadString);
    setListDevice(JSON.parse(message.payloadString))
  }

  const mqttSuccessHandler = () => {
      setIsConnected(true)
      prgMqtt.client.subscribe('listDevice');
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
      onOffHandle={() => prgMqtt.client.publish('controlDevice',
          JSON.stringify({idRoom:item?.id_room, idDevice: item?._id, status:!item?.status}))
      }
    />
  );

  const onValueChange = (itemValue) => {
    setSelectedValue(itemValue)
    prgMqtt.client.publish('getListDevice', JSON.stringify({idRoom:itemValue}))
  }

  const onOffHandle = () => {

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
        <Button title={'test'} onPress={() => prgMqtt.client.publish('getListDevice', JSON.stringify({idRoom:listRoom[0]?._id}))}/>
      </View>
    </View>
  );
};
