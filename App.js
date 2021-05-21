import React from 'react';
import 'react-native-gesture-handler';
import {HomeStackScreen} from './src/navigations';
import configureStore from "./src/redux";
import {Provider} from 'react-redux';

const store = configureStore();

export const App = () => {
  return (
    <Provider store={store}>
      <HomeStackScreen />
    </Provider>
  )
}
