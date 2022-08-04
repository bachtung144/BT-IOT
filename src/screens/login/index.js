import React, {useState, useEffect} from 'react';
import {View, Text, Image, TextInput, Button} from 'react-native';
import {HeaderLogin} from '../../assets';
import {styles} from './style';
import {BaseBtn} from '../../components/baseBtn';
import userApi from '../../service/api/user';
import {storeData} from '../../service/localStorage';
import {useDispatch} from "react-redux";
import {storeStatus} from "../../states/actions/user";

export const Login = () => {
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      let params = {
        phone: phone,
        password: password,
      };
      const response = await userApi.login(params);
      const {token} = response;
      if (token) {
        let storeToken = await storeData('token', token);
        let storeApartId = await storeData(
          'apartmentId',
          response?.apartment_id,
        );
        let storeUserId = await storeData(
            'userId',
            response?.id,
        );
        if (storeToken && storeApartId && storeUserId ) {
          dispatch(storeStatus(true))
        }
      }
    } catch (error) {
      alert(error.response?.data?.msg);
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
