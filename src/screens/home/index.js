import React, {useState} from 'react';
import {View, Text, Picker, FlatList, TouchableOpacity,Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from "./style";
import { checkToken } from "../../redux/actions/login";
import { useDispatch } from "react-redux";

const ItemDevice = ({device, status, type, handleNavigate}) => (
  <TouchableOpacity
    style={{
      height: 120,
      width: '45%',
      marginRight: 33,
      backgroundColor: 'white',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
      borderRadius: 5,
    }}
    onPress={handleNavigate}>
    <Text
      style={{fontSize: 20, fontWeight: '800', marginTop: 5, marginLeft: 5}}>
      {device}
    </Text>
    <View style={{height: 0.8, backgroundColor: 'black'}} />
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: 8,
        marginTop: 10,
        marginLeft: 5,
      }}>
      {
        {
          door: <MaterialCommunityIcons name={'door'} style={{fontSize: 70}} />,
          tv: (
            <MaterialCommunityIcons
              name={'television'}
              style={{fontSize: 70}}
            />
          ),
          air: <Feather name={'airplay'} style={{fontSize: 70}} />,
        }[type]
      }
      <TouchableOpacity
        style={{
          height: 50,
          width: 50,
          backgroundColor: status === 1 ? '#0E4DA4' : 'gray',
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <AntDesign
          name={'poweroff'}
          style={{fontSize: 25, color: status === 1 ? 'white' : 'black'}}
        />
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const ItemAddDevice = ({navigation}) => {
  return(
    <TouchableOpacity
      style={{
        height: 120,
        width: '45%',
        justifyContent:'center',
        alignItems:'center',
        marginRight: 33,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 5,
      }}
      onPress={() => navigation.navigate('AddDevice')}
      >
      <AntDesign name={'pluscircleo'} style={{fontSize:80,color:'#0E4DA4'}}/>
    </TouchableOpacity>
  )
}

export const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState('Phòng ngủ');

  const renderItem = ({item,index}) => (
    index > DATA.length - 1 ?
      <ItemAddDevice navigation={navigation}/>
     : <ItemDevice
      device={item?.device}
      status={item?.status}
      type={item.type}
      handleNavigate={
        item?.type === 'air'
          ? () => navigation.navigate('AirDevice', {nameDevice: item?.device})
          : () =>
            navigation.navigate('SwitchDevice', {nameDevice: item?.device})
      }
    />
  );

  return (
    <View style={{flex: 1}}>
      {/*Header*/}
      <View style={{marginHorizontal: 10}}>
        <View
          style={styles.ctnPicker}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Phòng ngủ" value="bedroom" />
            <Picker.Item label="Phòng khách" value="livings" />
          </Picker>
        </View>

        <FlatList
          style={{marginTop: 30}}
          numColumns={2}
          columnWrapperStyle={{marginBottom: 20}}
          data={[...DATA,'item']}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Button title={'abc'} onPress={() => dispatch(() => checkToken(false))}/>
    </View>
  );
};

const DATA = [
  {
    id: 1,
    room: 'bedroom',
    type: 'door',
    device: 'Cửa ra vào',
    status: 1,
  },
  {
    id: 2,
    room: 'bedroom',
    type: 'tv',
    device: 'Tivi 1',
    status: 0,
  },
  {
    id: 3,
    room: 'bedroom',
    type: 'air',
    device: 'Điều hòa 1',
    status: 1,
  },
  {
    id: 4,
    room: 'bedroom',
    type: 'air',
    device: 'Điều hòa 2',
    status: 0,
  },
];
