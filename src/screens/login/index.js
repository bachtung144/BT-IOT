import React,{useState} from 'react';
import {View, Text, Image, TextInput, AsyncStorage} from 'react-native';
import {HeaderLogin} from '../../assets';
import {styles} from './style';
import {BaseBtn} from '../../components/baseBtn';
import userApi from '../../service/api/userApi';
import { prgMqtt } from "../../service/mqtt/test";
import { _storeData } from "../../service/storage/storeData";
import * as RootNavigation from '../../navigations/RootNavigation'

export const Login = ({navigation}) => {
  const [phone, onChangePhone] = useState('')
  const [password, onChangePassword] = useState('')


  const handleLogin = async () => {
    try {
      let params = {
        phone: phone,
        password: password,
      };
      // 123456789, 1234
      const response = await userApi.login(params);
      const {token} = response;
      if (token) {
        await _storeData('token', token)
        return navigation.navigate('HomeTab');
      }
    } catch (error) {
      console.log('Failed to login: ', error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Image source={HeaderLogin} style={styles.imgHeader} />

      <View style={styles.ctnTextInput}>
        <View style={{marginBottom: 30}}>
          <Text style={{marginBottom: 10}}>Số điện thoại</Text>
          <TextInput
            style={styles.txtInputPhone}
            onChangeText={onChangePhone}
            placeholder={'Số điện thoại'}
            keyboardType={'numeric'}
          />
        </View>

        <View>
          <Text style={{marginBottom: 10}}>Mật khẩu</Text>
          <TextInput
            style={styles.txtInputPass}
            onChangeText={onChangePassword}
            secureTextEntry={true}
            placeholder={'Mật khẩu'}
          />
        </View>
      </View>

      <BaseBtn title={'ĐĂNG NHẬP'} onPress={handleLogin} />
      {/*<Button onPress={() => prgMqtt.client.publish('getListDevice',*/}
      {/*  JSON.stringify({idRoom:'609a47e6b0a865a1dbd45f98'}))} title={'test'}/>*/}
    </View>
  );
};
