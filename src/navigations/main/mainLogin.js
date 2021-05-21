import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../../screens/login';
import {HomeTab} from '../bottomTab';

const MainLoginStack = createStackNavigator();

export const MainLoginNavigator = ({navigation}) => {
  return (
    <MainLoginStack.Navigator>
      <MainLoginStack.Screen
        name={'HomeTab'}
        component={HomeTab}
        options={{headerShown: false}}
      />
    </MainLoginStack.Navigator>
  );
};
