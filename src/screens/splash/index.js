import React from 'react';
import {ImageBackground, View} from 'react-native';
import {SplashImg} from '../../assets';
import {styles} from "./style";

export const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={SplashImg} style={styles.image} />
    </View>
  );
};
