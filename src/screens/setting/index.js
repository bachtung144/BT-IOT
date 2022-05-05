import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {ButtonDelete} from '../../components/btnDelete';
import {getData, removeUser} from '../../service/localStorage';
import {styles} from './style';
import {storeUser} from "../../states/actions/user";
import {useDispatch} from "react-redux";
import apartmentApi from "../../service/api/apartment";
import userApi from "../../service/api/user";

export const Setting = ({navigation}) => {
    const dispatch = useDispatch();
    const [user, setUser] = useState(null);
  const logOut = async () => {
    await removeUser('token')
      .then(data => {
        if (data) {
          return navigation.navigate('Login');
          //   dispatch(storeUser(false))
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

    useEffect(() => {
        getUser()
    },[])

  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        <FontAwesome name={'user-circle'} style={styles.avt} />
        <Text style={styles.phone}>{user?.phone}</Text>
      </View>

      <View style={{marginVertical:20}}>
          <View style={styles.line}>
              <Text style={{fontSize: 20}}>Thay đổi mật khẩu</Text>
              <FontAwesome name={'angle-right'} style={{fontSize: 40}} />
          </View>

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
                  {user?.address}, quận: {user?.district}, {user?.city}
              </Text>
          </View>
      </View>

      <View style={{marginHorizontal: 10}}>
        <ButtonDelete title={'ĐĂNG XUẤT'} onPress={() => logOut()} />
      </View>
    </View>
  );
};
