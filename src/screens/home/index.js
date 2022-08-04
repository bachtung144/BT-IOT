import React, {useState, useEffect} from 'react';
import {
  View,
  Picker,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import roomApi from '../../service/api/room';
import {styles} from './style';
import {ItemDevice} from '../../components/itemDevice';
import deviceApi from '../../service/api/device';
import {getData} from '../../service/localStorage';

export const Home = () => {
  const [listRoom, setListRoom] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [listDevice, setListDevice] = useState(null);

  const getListRoom = async apartId => {
    let params = {
      apartmentId: apartId,
    };
    const response = await roomApi.getAll(params);
    const {rooms} = response;
    if (rooms) {
      setListRoom([...rooms]);
      await getListDeviceInRoom(rooms[0]?._id);
    }
  };

  const getListDeviceInRoom = async roomId => {
    const response = await roomApi.getDevices(roomId);
    const {devices} = response;
    if (devices) {
      setListDevice(devices);
    }
  };

  const onValueChange = value => {
    setSelectedValue(value);
    getListDeviceInRoom(value);
  };

  const controlDevice = async (deviceId, data) => {
    const response = await deviceApi.controlDevice(deviceId, data);
    const {devices} = response;
    if (devices) {
      setListDevice(devices);
    }
  };

  const renderItem = ({item}) => (
    <ItemDevice
      device={item?.name}
      status={item?.status}
      onOffHandle={() =>
        controlDevice(item?._id, {status: item?.status === 1 ? 0 : 1})
      }
    />
  );

  const handleList = async () => {
    await getData('apartmentId')
      .then(data => {
        if (data) {
          getListRoom(data);
        }
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    handleList();
  }, []);

  return (
    <View style={{flex: 1}}>
      {listRoom ? (
        <View style={styles.ctnPicker}>
          <Picker onValueChange={onValueChange}>
            {listRoom?.map(item => (
              <Picker.Item
                label={item?.name}
                value={item?._id}
                key={item?._id}
              />
            ))}
          </Picker>
        </View>
      ) : (
        <ActivityIndicator size="large" style={{alignSelf: 'center'}} />
      )}

      {listDevice && listRoom ? (
        <FlatList
          data={listDevice}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item, index) => 'key' + index}
          style={{marginVertical: 10, marginRight: 10}}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};
