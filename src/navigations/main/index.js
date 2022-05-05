import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../screens/login';
import {HomeTab} from '../bottomTab';
import {getData} from "../../service/localStorage";
import {useDispatch, useSelector} from "react-redux";
import {storeUser} from "../../states/actions/user";

const MainStack = createStackNavigator();

export const MainNavigator = ({navigation}) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state?.user?.user);

    // const test = async () => {
    //     await getData("token")
    //         .then(data => {
    //             dispatch(storeUser(data))
    //         })
    //         .catch(err => console.log(err))
    // }
    // useEffect(() => {
    //     test()
    // }, []);

  return (
    <MainStack.Navigator>
        {
            token ? null :
                <MainStack.Screen
                name={'Login'}
                component={Login}
                // options={{headerShown: false,animationTypeForReplace: token ? 'push' : 'pop',}}
                options={{headerShown: false}}
                />
        }
      <MainStack.Screen
        name={'HomeTab'}
        component={HomeTab}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};
