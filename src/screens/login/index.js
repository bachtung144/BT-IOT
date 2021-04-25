import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {HeaderLogin} from '../../assets';

export const Login = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Image source={HeaderLogin} style={{width: '100%', height: '30%'}} />

      <View style={{marginHorizontal: 10, marginTop: '20%'}}>
        <View style={{marginBottom: 30}}>
          <Text style={{marginBottom: 10}}>Số điện thoại</Text>
          <TextInput
            style={{borderWidth: 0.5, borderColor: 'gray', borderRadius: 5}}
            placeholder={'Số điện thoại'}
          />
        </View>

        <View>
          <Text style={{marginBottom: 10}}>Mật khẩu</Text>
          <TextInput
            style={{borderWidth: 0.5, borderColor: 'gray', borderRadius: 5}}
            placeholder={'Mật khẩu'}
          />
        </View>
      </View>

      <TouchableOpacity
        style={{
          height: 60,
          backgroundColor: '#65AAEA',
          marginHorizontal: 10,
          marginTop: '30%',
          borderRadius: 30,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => navigation.navigate('HomeTab')}>
        <Text style={{fontSize: 18, color: '#FFFFFF', fontWeight: 'bold'}}>
          ĐĂNG NHẬP
        </Text>
      </TouchableOpacity>
    </View>
  );
};
