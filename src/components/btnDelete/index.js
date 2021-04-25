import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './style';

export const ButtonDelete = ({title}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
