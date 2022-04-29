import React, {useState, useEffect} from 'react';
import {
  View,
  Picker,
  ActivityIndicator,
  FlatList,
  Text,
} from 'react-native';
import roomApi from '../../service/api/room';
import {styles} from './style';
import {ItemDevice} from '../../components/itemDevice';
import apartmentApi from '../../service/api/apartment';
import deviceApi from '../../service/api/device';
import {getData} from '../../service/localStorage';

export const Home = () => {
  const [listRoom, setListRoom] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [apartment, setApartment] = useState(null);
  const [listDevice, setListDevice] = useState(null);

  const handleListRoom = async data => {
    let params = {
      idApartment: data,
    };
    const response = await roomApi.getAll(params);
    const {rooms} = response;
    if (rooms) {
      setListRoom([...rooms]);
      await handleListDeviceInRoom(rooms[0]?._id);
    }
  };

  const handleListDeviceInRoom = async roomId => {
    const response = await roomApi.getDevices(roomId);
    const {devices} = response;
    if (devices) {
      setListDevice(devices);
    }
  };

  const getInfoApartment = async data => {
    const response = await apartmentApi.getInfo(data);
    if (response) {
      setApartment(response);
    }
  };

  const onValueChange = itemValue => {
    setSelectedValue(itemValue);
    handleListDeviceInRoom(itemValue);
  };

  const controlDevice = async (deviceId, data) => {
    const response = await deviceApi.controlDevice(deviceId, data);
    const {devices} = response;
    if (devices) {
      setListDevice(devices);
    }
  };

  useEffect(() => {
    handleApartAndRoom();
  }, []);

  const renderItem = ({item}) => (
    <ItemDevice
      device={item?.name}
      status={item?.status}
      onOffHandle={() =>
        controlDevice(item?._id, {status: item?.status === 1 ? 2 : 1})
      }
    />
  );

  const handleApartAndRoom = async () => {
    await getData('idApartment')
      .then(data => {
        if (data) {
          getInfoApartment(data);
          handleListRoom(data);
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={{flex: 1}}>
      <View style={{height: '10%', backgroundColor: '#C4C4C4'}}>
        <Text style={{marginLeft: 20, marginTop: 5}}>
          Tên: {apartment?.apartment}
        </Text>
        <Text style={{marginLeft: 20}}>
          Địa chỉ: {apartment?.address}, Tòa nhà: {apartment?.building}, Quận:{' '}
          {apartment?.district},{apartment?.city}
        </Text>
      </View>
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
          style={{alignSelf: 'center', marginVertical: 10, marginRight: 10}}
        />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </View>
  );
};
