import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Button, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ButtonDelete} from '../../components/btnDelete';
import {getData, removeItem} from '../../service/localStorage';
import {styles} from './style';
import {storeStatus} from "../../states/actions/user";
import {useDispatch} from "react-redux";
import userApi from "../../service/api/user";

export const Setting = ({navigation}) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
    const [oldPass, onChangeOldPass] = React.useState('');
    const [newPass, onChangeNewPass] = React.useState('');
    const [changePass, setChangePass] = React.useState(false);

  const logOut = async () => {
    await removeItem('token')
      .then(data => {
        if (data) {
            dispatch(storeStatus(false))
        }
      })
      .catch(err => console.log(err));
  };

    const getUser = async () => {
        await getData('userId')
            .then(async data => {
                if (data) {
                    const response = await userApi.getInfor(data);
                    if (response) {
                        setUser(response);
                    }
                }
            })
            .catch(error => alert(error.response?.data?.msg));
    };

    const handleChangePass = async () => {
        try {
            let params = {
                oldPassword: oldPass,
                newPassword: newPass,
                id: user?.id
            };
            const response = await userApi.changePass(params)
            if (response) {
                Alert.alert(
                    "Thông báo",
                    response?.msg,
                    [
                        {
                            text: "OK",
                            onPress: () => logOut(),
                        },
                    ]
                );
            }
        }catch (error) {
            alert(error?.response?.data?.msg)
        }
    }

    useEffect(() => {
        getUser()
    },[])

  return (
    <ScrollView style={{flex: 1}}>
      <View style={styles.container}>
        <FontAwesome name={'user-circle'} style={styles.avt} />
        <Text style={styles.phone}>{user?.phone}</Text>
      </View>

      <View style={{marginVertical:20}}>
          <TouchableOpacity style={styles.line} onPress={() => setChangePass(!changePass)}>
              <Text style={{fontSize: 20}}>Thay đổi mật khẩu</Text>
              <AntDesign name={'down'} style={{fontSize: 30}} />
          </TouchableOpacity>

          {
              changePass ?
                  <SafeAreaView >
                      <TextInput
                          style={{backgroundColor: '#FFFFFF', width:'90%', height:50, borderWidth:0.5, borderRadius:10, alignSelf:'center',
                              marginVertical:8}}
                          placeholder="Mật khẩu cũ"
                          onChangeText={onChangeOldPass}
                          value={oldPass}
                          secureTextEntry={true}
                      />

                      <TextInput
                          style={{backgroundColor: '#FFFFFF', width:'90%', height:50, borderWidth:0.5, borderRadius:10, alignSelf:'center',
                              marginVertical:8}}
                          placeholder="Mật khẩu mới"
                          onChangeText={onChangeNewPass}
                          value={newPass}
                          secureTextEntry={true}
                      />
                      <TouchableOpacity style={{backgroundColor: '#65AAEA', width:'90%', height:50, alignSelf:'center',
                          marginVertical:8, alignItems:'center', justifyContent:'center', borderRadius:10}}
                                        onPress={() => handleChangePass()}
                      >
                          <Text style={{fontSize:20, fontWeight:'bold', color: '#FFFFFF'}}>Xác nhận</Text>
                      </TouchableOpacity>
                  </SafeAreaView> : null
          }

          <View style={styles.line}>
              <Text style={{fontSize: 20}}>Căn hộ:</Text>
              <Text style={{fontSize: 20}}>{user?.apartment}</Text>
          </View>

          <View style={styles.line}>
              <Text style={{fontSize: 20}}>Tòa nhà:</Text>
              <Text style={{fontSize: 20}}>{user?.building}</Text>
          </View>

          <View style={styles.line}>
              <Text style={{fontSize: 20}}>Địa chỉ:</Text>
              <Text style={{fontSize: 20}} numberOfLines={10} ellipsizeMode='tail'>
                  {user?.address},{user?.district}, {user?.city}
              </Text>
          </View>
      </View>

      <View style={{marginTop:20, marginBottom:10}}>
        <ButtonDelete title={'ĐĂNG XUẤT'} onPress={() => logOut()} />
      </View>
    </ScrollView>
  );
}
