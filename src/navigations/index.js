import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {SplashNavigator} from './splash';
import {MainNavigator} from './main';
import { AsyncStorage } from "react-native";
import { MainLoginNavigator } from "./main/mainLogin";
import { checkToken } from "../redux/actions/login";
import { useSelector, useDispatch } from "react-redux";

const NaviStack = createStackNavigator();

export const HomeStackScreen = () => {
  const dispatch = useDispatch();
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [token, setToken] = useState(false);
  const {checkToken} = useSelector(state => state.login)

  const _retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        dispatch(() => checkToken(true))
      }
    } catch (error) {
      dispatch(() => checkToken(false))
    }
  };


  useEffect(() => {
    console.warn('check tk',checkToken)
    let time = setTimeout(() => setIsSignedIn(true), 3000);
    _retrieveData('token')
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
          checkToken ?
          <NaviStack.Screen
            name="Main"
            component={MainLoginNavigator}
            options={{headerShown: false}}
          /> :
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
