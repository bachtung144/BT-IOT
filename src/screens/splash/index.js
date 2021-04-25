import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {SplashImg} from '../../assets';

export const Splash = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={SplashImg} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0',
  },
});
