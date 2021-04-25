import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {HeaderDevice} from '../../components/headerDevice';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ButtonDelete} from '../../components/btnDelete';

export const AirDevice = ({navigation, route}) => {
  let titleHeader = route.params.nameDevice;
  return (
    <View style={{flex: 1}}>
      <HeaderDevice
        goBack={() => navigation.goBack()}
        title={titleHeader}
        edit={() => console.warn('edit')}
      />
      <View style={{height: '100%', marginHorizontal: 10, marginTop: '10%'}}>
        <View style={{height: '70%'}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View
              style={{
                backgroundColor: 'white',
                width: '49%',
                alignItems: 'center',
                justifyContent: 'center',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <AntDesign
                name={'caretup'}
                style={{fontSize: 60, color: '#0E4DA4'}}
              />
              <Text style={{fontSize: 60}}>23</Text>
              <AntDesign
                name={'caretdown'}
                style={{fontSize: 60, color: '#FFAE19'}}
              />
            </View>

            <View
              style={{
                backgroundColor: 'white',
                width: '49%',
                justifyContent: 'space-around',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,

                elevation: 5,
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name={'fan'}
                  style={{fontSize: 60, color: '#20C3AF'}}
                />
                <Text style={{fontSize: 60}}>4</Text>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  alignItems: 'center',
                }}>
                <AntDesign
                  name={'minus'}
                  style={{fontSize: 50, color: '#FFAE19'}}
                />
                <AntDesign
                  name={'plus'}
                  style={{fontSize: 50, color: '#0E4DA4'}}
                />
              </View>
            </View>
          </View>

          <TouchableOpacity
            style={{
              height: '30%',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              borderWidth: 0.5,
              backgroundColor: 'white',
              marginTop: '20%',
            }}>
            <AntDesign name={'poweroff'} style={{fontSize: 100}} />
          </TouchableOpacity>
        </View>

        <ButtonDelete title={'XÓA THIẾT BỊ'} />
      </View>
    </View>
  );
};
