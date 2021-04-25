import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {SplashNavigator} from './splash';
import {MainNavigator} from './main';

const NaviStack = createStackNavigator();

export const HomeStackScreen = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    let time = setTimeout(() => setIsSignedIn(true), 3000);
    return () => {
      clearTimeout(time);
    };
  });

  return (
    <NavigationContainer>
      <NaviStack.Navigator headerMode="none">
        {!isSignedIn ? (
          <NaviStack.Screen
            name="Splash"
            component={SplashNavigator}
            options={{headerShown: false}}
          />
        ) : (
          <NaviStack.Screen
            name="Main"
            component={MainNavigator}
            options={{headerShown: false}}
          />
        )}
      </NaviStack.Navigator>
    </NavigationContainer>
  );
};
