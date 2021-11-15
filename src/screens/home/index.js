import React, {useState, useEffect} from 'react';
import {View, Picker, ActivityIndicator, FlatList} from 'react-native';
import {emit} from '../../service/socket/__Socket';
import roomApi from '../../service/api/room';
import {styles} from './style';
import {useSelector} from 'react-redux';
import {ItemAddDevice} from '../../components/itemAddDevice';
import {ItemDevice} from '../../components/itemDevice';

export const Home = ({navigation}) => {
  const [listRoom, setListRoom] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);
  const user = useSelector(state => state.user.user);
  const listDevice = useSelector(state => state.listDevice.listDevice);

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

  const onValueChange = itemValue => {
    setSelectedValue(itemValue);
    emit('Client-list-device', itemValue)
  };

  useEffect(() => {
    handleListRoom();
  }, []);

  const renderItem = ({item, index}) =>
      <ItemDevice device={item?.name}
                  status={item?.status}
      />


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
          <ActivityIndicator size="large" />
      )}
      {listDevice ? (
          <FlatList
              style={{marginTop: 30}}
              numColumns={2}
              columnWrapperStyle={{marginBottom: 20}}
              data={listDevice}
              renderItem={renderItem}
              keyExtractor={item => item?.id}
          />
      ) : (
          <ActivityIndicator size="large" />
      )}
    </View>
  );
};
