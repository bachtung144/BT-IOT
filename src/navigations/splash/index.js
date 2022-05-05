import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect} from 'react';
import {Splash} from '../../screens/splash';
import {getData} from "../../service/localStorage";
import {storeUser} from "../../states/actions/user";
import {useDispatch} from "react-redux";

const SplashStack = createStackNavigator();

export const SplashNavigator = () => {
    const dispatch = useDispatch();
    const test = async () => {
        await getData("token")
            .then(data => {
                dispatch(storeUser(data))
            })
            .catch(err => console.log(err))
    }
    useEffect(() => {
        test()
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
