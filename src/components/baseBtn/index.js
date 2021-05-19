import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';

export const BaseBtn = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.txtTitle}>{title}</Text>
    </TouchableOpacity>
  );
};
