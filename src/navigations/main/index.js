import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../screens/login';
import {HomeTab} from '../bottomTab';
import {getData} from "../../service/localStorage";

const MainStack = createStackNavigator();

export const MainNavigator = ({navigation}) => {
    // const [token, setToken] = useState(null);
    // const test = async () => {
    //     await getData("token")
    //         .then(data => {
    //             setToken(data)
    //         })
    //         .catch(err => console.log(err))
    // }
    // useEffect(() => {
    //     test()
    // }, []);

  return (
    <MainStack.Navigator>
        <MainStack.Screen
            name={'Login'}
            component={Login}
            // options={{headerShown: false,animationTypeForReplace: token ? 'push' : 'pop',}}
            options={{headerShown: false}}
        />
      <MainStack.Screen
        name={'HomeTab'}
        component={HomeTab}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};
