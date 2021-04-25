import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {HeaderDevice} from '../../components/headerDevice';
import {ButtonDelete} from '../../components/btnDelete';

export const SwitchDevice = ({navigation, route}) => {
  let titleHeader = route.params.nameDevice;
  return (
    <View style={{flex: 1}}>
      {/*Header*/}
      <HeaderDevice
        goBack={() => navigation.goBack()}
        title={titleHeader}
        edit={() => console.warn('edit')}
      />
      {/*Body*/}
      <View style={{height: '100%', marginHorizontal: 10}}>
        <TouchableOpacity
          style={{
            height: '30%',
            marginBottom: '40%',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            borderWidth: 0.5,
            backgroundColor: 'white',
            marginTop: '45%',
          }}>
          <AntDesign name={'poweroff'} style={{fontSize: 100}} />
        </TouchableOpacity>
        <ButtonDelete title={'XÓA THIẾT BỊ'} />
      </View>
    </View>
  );
};
