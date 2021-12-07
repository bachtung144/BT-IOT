import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useSelector} from "react-redux";
import {RootUser} from "./root";
import {ChildUser} from "./child";

export const Role = () => {
    const user = useSelector(state => state.user.user);
  return (
      <View>
          {
              user?.type === 'root' ? <RootUser/> : <ChildUser/>
          }
      </View>
  );
}
