import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../screens/login';
import {HomeTab} from '../bottomTab';

const MainStack = createStackNavigator();

export const MainNavigator = ({navigation}) => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={'Login'}
        component={Login}
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
