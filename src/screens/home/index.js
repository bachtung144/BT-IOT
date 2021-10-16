import React, {useState, useEffect, useCallback} from 'react';
import {View, Button} from 'react-native';
import {connectSocket, emit} from "../../service/socket/__Socket";
export const Home = ({navigation}) => {

    const testSocket = () => {
        emit('Client-sent-data','alo')
    }

    useEffect(()=>{
        let isConnect =  connectSocket();
        console.log("isConnect => ", isConnect)
    },[])

    return (
        <View style={{flex: 1}}>
            <Button title={'test'} onPress={() => testSocket()}/>
        </View>
    );
};
