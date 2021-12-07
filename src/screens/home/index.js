import React, {useState, useEffect} from 'react';
import {View, Picker, ActivityIndicator, FlatList, Text} from 'react-native';
import {emit} from '../../service/socket/__Socket';
import roomApi from '../../service/api/room';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {ItemAddDevice} from '../../components/itemAddDevice';
import {ItemDevice} from '../../components/itemDevice';
import apartmentApi from "../../service/api/apartment";

export const Home = ({navigation}) => {
  const [listRoom, setListRoom] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const [apartment, setApartment] = useState(null);
  const user = useSelector(state => state.user.user);
  const listDevice = useSelector(state => state.listDevice.listDevice);
  const type = listDevice?.type


  const handleListRoom = async () => {
    let params = {
      idApartment: user?.id_apartment,
    };
    const response = await roomApi.getAll(params);
    const {rooms} = response;
    let promise = new Promise(function(resolve, reject) {
      if (rooms) {
              setListRoom(rooms);
              setSelectedValue(rooms[0]?._id);
              resolve(rooms[0]?._id)
      }
      else reject(false)
    })

    promise.then(function(data) {
      emit('Client-list-device', data)
    })
    promise.catch(function(data) {
      alert('failed to load list device')
    })
  };

  const getInfoApartment = async () => {
      const response = await apartmentApi.getInfo(user?.id_apartment)
      if (response) setApartment(response)
  }


  const onValueChange = itemValue => {
    setSelectedValue(itemValue);
    emit('Client-list-device', itemValue)
  };

  useEffect(() => {
      getInfoApartment();
    handleListRoom();
  }, []);

  const renderItem = ({item, index}) =>
      <ItemDevice device={item?.name}
                  status={item?.status}
                  type = {type}
                  onOffHandle={() => {
                    emit(
                        'Client-control-device',
                        JSON.stringify({
                          idRoom: item?.id_room,
                          idDevice: item?._id,
                          status: item?.status === 1 ? 2 : 1,
                        }),
                    );
                  }}
      />


  return (
    <View style={{flex: 1}}>
      <View style={{height:'10%', backgroundColor: '#C4C4C4'}}>
        <Text style={{marginLeft:20, marginTop:5}}>Tên: {apartment?.apartment}</Text>
        <Text style={{marginLeft:20}}>
            Địa chỉ: {apartment?.address},
            Tòa nhà: {apartment?.building},
            Quận: {apartment?.district},
            {apartment?.city}
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
          <ActivityIndicator size="large" />
      )}
        <View style={{height : 30, backgroundColor:'#65AAEA', marginHorizontal:10, marginTop : 20, alignItems:'center',
        justifyContent:'center'}}>
            <Text style={{fontWeight:'bold', fontSize:15}}>Cửa ra vào</Text>
        </View>
          {listDevice ?
              type === '2c' ? (
                  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                      <FlatList
                          style={{marginRight:10}}
                          data={listDevice?.left}
                          renderItem={renderItem}
                          keyExtractor={item => item?.id}
                      />
                      <FlatList
                          data={listDevice?.right}
                          renderItem={renderItem}
                          keyExtractor={item => item?.id}
                      />
                  </View>
              ) :(
                  <View style={{flexDirection:'row', justifyContent:'space-around'}}>
                      <FlatList
                          style={{marginRight:10}}
                          data={listDevice?.left}
                          renderItem={renderItem}
                          keyExtractor={item => item?.id}
                      />
                      <FlatList
                          style={{marginRight:10}}
                          data={listDevice?.middle}
                          renderItem={renderItem}
                          keyExtractor={item => item?.id}
                      />
                      <FlatList
                          data={listDevice?.right}
                          renderItem={renderItem}
                          keyExtractor={item => item?.id}
                      />
                  </View>
              )
              : (
                  <ActivityIndicator size="large" />
              )}
    </View>
  );
};
