import React from 'react';
import 'react-native-gesture-handler';
import {HomeStackScreen} from './src/navigations';
import { Provider } from 'react-redux';
import {store} from "./src/states/store";

export const App = () => {
  return (
      <Provider store={store}>
        <HomeStackScreen/>
      </Provider>
  );
}
