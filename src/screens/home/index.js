import React, {useState, useEffect} from 'react';
import {View, Picker, ActivityIndicator, FlatList} from 'react-native';
import {emit} from '../../service/socket/__Socket';
import listRoomApi from '../../service/api/listRoomApi';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {ItemAddDevice} from '../../components/itemAddDevice';
import {ItemDevice} from '../../components/itemDevice';

export const Home = ({navigation}) => {
  const [listRoom, setListRoom] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const listDevices = useSelector(state => state.listDevices.listDevices);

  const handleListRoom = async () => {
    try {
      let params = {
        idUser: '609a4840b0a865a1dbd45f9a',
      };
      const response = await listRoomApi.getAll(params);
      const {rooms} = response;
      setListRoom(rooms);
      setSelectedValue(rooms[0]._id);
    } catch (error) {
      setListRoom(null);
    }
  };

  const onValueChange = itemValue => {
    setSelectedValue(itemValue);
  };

  useEffect(() => {
    handleListRoom();
  }, []);

  const renderItem = ({item, index}) =>
    index >
    listDevices.filter(item => item.id_room === selectedValue)?.length - 1 ? (
      <ItemAddDevice navigation={navigation} />
    ) : (
      <ItemDevice
        device={item?.name}
        status={item?.status}
        type={item.type}
        handleNavigate={
          item?.type === 'Air'
            ? () => navigation.navigate('AirDevice', {nameDevice: item?.name})
            : () =>
                navigation.navigate('SwitchDevice', {nameDevice: item?.name})
        }
        onOffHandle={() => {
          emit(
            'Client-control-device',
            JSON.stringify({
              idRoom: item?.id_room,
              idDevice: item?._id,
              status: !item?.status,
            }),
          );
        }}
      />
    );

  return (
    <View style={{flex: 1}}>
      {listRoom ? (
        <View style={styles.ctnPicker}>
          <Picker onValueChange={onValueChange}>
            {listRoom?.map(item => (
              <Picker.Item
                label={item?.name_room}
                value={item?._id}
                key={item?._id}
              />
            ))}
          </Picker>
        </View>
      ) : (
        <ActivityIndicator size="large" />
      )}
      {listDevices ? (
        <FlatList
          style={{marginTop: 30}}
          numColumns={2}
          columnWrapperStyle={{marginBottom: 20}}
          data={[
            ...listDevices.filter(item => item.id_room === selectedValue),
            'item',
          ]}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};
