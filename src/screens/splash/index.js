import React,{useEffect} from 'react';
import {ImageBackground, View} from 'react-native';
import {SplashImg} from '../../assets';
import {styles} from "./style";
import { prgMqtt } from "../../service/mqtt/test";

export const Splash = () => {
  useEffect(() => {
    // prgMqtt();
  },[]);

  return (
    <View style={styles.container}>
      <ImageBackground source={SplashImg} style={styles.image} />
    </View>
  );
};
