import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../screens/login';
import {HomeTab} from '../bottomTab';
import {useSelector} from "react-redux";

const MainStack = createStackNavigator();

export const MainNavigator = () => {
    const isSignedIn = useSelector((state) => state?.user?.signedIn);

  return (
    <MainStack.Navigator>
        {
            isSignedIn ?
                <MainStack.Screen
                    name={'HomeTab'}
                    component={HomeTab}
                    options={{headerShown: false}}
                />
                :
                <MainStack.Screen
                    name={'Login'}
                    component={Login}
                    options={{headerShown: false}}
                />
        }
    </MainStack.Navigator>
  );
};
