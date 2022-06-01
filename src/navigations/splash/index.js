import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Splash} from '../../screens/splash';
import {useDispatch} from "react-redux";
import {getData} from "../../service/localStorage";
import {storeStatus} from "../../states/actions/user";

const SplashStack = createStackNavigator();

export const SplashNavigator = () => {
    const dispatch = useDispatch();

    const checkLogin = async () => {
        await getData("token")
            .then(data => {
                dispatch(storeStatus(data))
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        checkLogin()
    }, []);

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
