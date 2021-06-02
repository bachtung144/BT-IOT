import React,{useState,useEffect} from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {HeaderLogin} from '../../assets';
import {styles} from './style';
import {BaseBtn} from '../../components/baseBtn';
import userApi from '../../service/api/userApi';

export const Login = ({navigation}) => {
  const [phone, setPhone] = useState('')
  const [password,setPassword] = useState('')

  const handleLogin = async () => {
    try {
      let params = {
        phone: phone,
        password: password,
      };
      const response = await userApi.login(params);
      const {token} = response;
      if (token) {
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
            placeholder={'Số điện thoại'}
            keyboardType={'numeric'}
            onChangeText={setPhone}
          />
        </View>

        <View>
          <Text style={{marginBottom: 10}}>Mật khẩu</Text>
          <TextInput
              style={styles.txtInputPass}
              placeholder={'Mật khẩu'}
              onChangeText={setPassword}
              secureTextEntry={true}
          />
        </View>
      </View>

      <BaseBtn title={'ĐĂNG NHẬP'} onPress={handleLogin} />
    </View>
  );
};
