import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Text, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {styles} from './style';

export const HeaderDevice = ({goBack, title, edit}) => {
  return (
    <View style={styles.container}>
      <MaterialIcons
        name={'keyboard-backspace'}
        style={styles.icoGoBack}
        onPress={goBack}
      />
      <Text style={styles.title}>{title}</Text>
      <Feather name={'edit'} style={styles.icoEdit} onPress={edit} />
    </View>
  );
};
