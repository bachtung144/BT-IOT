import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Splash} from '../../screens/splash';

const SplashStack = createStackNavigator();

export const SplashNavigator = () => {
  return (
    <SplashStack.Navigator initialRouteName="Splash">
      <SplashStack.Screen
        name={'Splash'}
        component={Splash}
        options={{headerShown: false}}
      />
    </SplashStack.Navigator>
  );
};
