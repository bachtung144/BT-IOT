import React, {useState} from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ButtonDelete} from '../../components/btnDelete';
import {removeUser} from '../../service/localStorage';
import {styles} from './style';

export const Setting = ({navigation}) => {
  const logOut = async () => {
    await removeUser('token')
      .then(data => {
        if (data) {
          return navigation.navigate('Login');
        }
      })
      .catch(err => console.log(err));
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <FontAwesome name={'user-circle'} style={styles.avt} />
        <Text style={styles.phone}>(+84) 795328710</Text>
      </View>

      <View style={styles.line}>
        <Text style={{fontSize: 20}}>Thay đổi mật khẩu</Text>
        <FontAwesome name={'angle-right'} style={{fontSize: 40}} />
      </View>

      <View style={[styles.line, {marginBottom: '15%'}]}>
        <Text style={{fontSize: 20}}>Phiên bản ứng dụng</Text>
        <Text style={{fontSize: 20}}>1.1.1.0</Text>
      </View>

      <View style={{marginHorizontal: 10}}>
        <ButtonDelete title={'ĐĂNG XUẤT'} onPress={() => logOut()} />
      </View>
    </View>
  );
};
