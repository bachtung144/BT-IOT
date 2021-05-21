import React,{useState,useEffect} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../../screens/login";
import { HomeTab } from "../bottomTab";

const LoginStack = createStackNavigator();

export const LoginNavigator = ({navigation}) => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name={'Login'}
        component={Login}
        options={{headerShown: false}}
      />
    </LoginStack.Navigator>
  );
};
