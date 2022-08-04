import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../../../screens/home';

const TabHome = createStackNavigator();

export const TabHomeNavigator = () => {
  return (
    <TabHome.Navigator>
      <TabHome.Screen
        name={'Home'}
        component={Home}
        options={{headerShown: false}}
      />
    </TabHome.Navigator>
  );
};
