import React from 'react';
import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import {HeaderLogin} from '../../assets';
import {styles} from "./style";

export const Login = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <Image source={HeaderLogin} style={styles.imgHeader} />

      <View style={styles.ctnTextInput}>
        <View style={{marginBottom: 30}}>
          <Text style={{marginBottom: 10}}>Số điện thoại</Text>
          <TextInput
            style={styles.txtInputPhone}
            placeholder={'Số điện thoại'}
          />
        </View>

        <View>
          <Text style={{marginBottom: 10}}>Mật khẩu</Text>
          <TextInput
            style={styles.txtInputPass}
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
