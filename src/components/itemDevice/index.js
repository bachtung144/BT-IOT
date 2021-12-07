import React, {useState} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

export const ItemDevice = ({device, status, handleNavigate, onOffHandle, type}) => {
    return (
        <TouchableOpacity
            style={{
                height: 120,
                width: '100%',
                marginRight: 33,
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
                borderRadius: 5,
                marginTop:30
            }}
            onPress={handleNavigate}>
            <Text
                style={{fontSize: 20, fontWeight: '800', marginTop: 5, marginLeft: 5}}>
                {device}
            </Text>
            <View style={{height: 0.8, backgroundColor: 'black'}} />
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginRight: 8,
                    marginTop: 10,
                    marginLeft: 5,
                }}>
                {
                    type === '2c' ?
                        <MaterialCommunityIcons
                            name={'lamp'}
                            style={{fontSize: 70, color: status === 1 ? '#0E4DA4' : 'black'}}
                        />
                        :
                        <MaterialCommunityIcons
                            name={'lamp'}
                            style={{fontSize: 40, color: status === 1 ? '#0E4DA4' : 'black'}}
                        />
                }

                <TouchableOpacity
                    style={{
                        height: type === '2c' ? 50 : 30,
                        width: type === '2c' ? 50 : 30,
                        backgroundColor: status === 1 ? '#0E4DA4' : 'gray',
                        borderRadius: type === '2c' ? 25 : 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onPress={onOffHandle}
                >
                    {
                        type === '2c' ?
                            <AntDesign
                                name={'poweroff'}
                                style={{fontSize: 25, color: status === 1 ? 'white' : 'black'}}
                            />
                            :
                            <AntDesign
                                name={'poweroff'}
                                style={{fontSize: 10, color: status === 1 ? 'white' : 'black'}}
                            />
                    }
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
};
