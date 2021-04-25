import React, {useState} from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ButtonDelete} from '../../components/btnDelete';

export const Setting = () => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          height: '50%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 0.5,
          borderColor: 'gray',
        }}>
        <FontAwesome
          name={'user-circle'}
          style={{fontSize: 200, color: '#C4C4C4'}}
        />
        <Text style={{marginTop: 20, fontSize: 25, fontWeight: 'bold'}}>
          (+84) 795328710
        </Text>
      </View>

      <View
        style={{
          marginTop: '5%',
          backgroundColor: 'white',
          height: '10%',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
        }}>
        <Text style={{fontSize: 20}}>Thay đổi mật khẩu</Text>
        <FontAwesome name={'angle-right'} style={{fontSize: 40}} />
      </View>

      <View
        style={{
          marginTop: '5%',
          backgroundColor: 'white',
          height: '10%',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 10,
          justifyContent: 'space-between',
          marginBottom: '15%',
        }}>
        <Text style={{fontSize: 20}}>Phiên bản ứng dụng</Text>
        <Text style={{fontSize: 20}}>1.1.1.0</Text>
      </View>

      <View style={{marginHorizontal: 10}}>
        <ButtonDelete title={'ĐĂNG XUẤT'} />
      </View>
    </View>
  );
};
