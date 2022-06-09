import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Setting} from '../../screens/setting';
import {TabHomeNavigator} from './tabHome';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createMaterialBottomTabNavigator();

export const HomeTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'TabHomeNavigator') {
            iconName = 'home';
          }  else if (route.name === 'Setting') {
            iconName = 'user';
          }

          return <AntDesign name={iconName} size={25} color={color} />;
        },
      })}
      barStyle={{backgroundColor: '#65AAEA'}}
      activeColor={'#FFFFFF'}
      inactiveColor={'#909090'}>
      <Tab.Screen
        name="TabHomeNavigator"
        component={TabHomeNavigator}
        options={{title: 'Trang chủ'}}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{title: 'Cá nhân'}}
      />
    </Tab.Navigator>
  );
};
