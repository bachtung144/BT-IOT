import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SwitchDevice} from '../../../screens/switchDevice';
import {AirDevice} from '../../../screens/airDevice';
import {Home} from '../../../screens/home';
import { AddDevice } from "../../../screens/addDevice";

const TabHome = createStackNavigator();

export const TabHomeNavigator = () => {
  return (
    <TabHome.Navigator>
      <TabHome.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
      <TabHome.Screen
        name={'SwitchDevice'}
        component={SwitchDevice}
        options={{headerShown: false}}
      />
      <TabHome.Screen
        name={'AirDevice'}
        component={AirDevice}
        options={{headerShown: false}}
      />
      <TabHome.Screen
        name={'AddDevice'}
        component={AddDevice}
        options={{headerShown: false}}
      />
    </TabHome.Navigator>
  );
};
