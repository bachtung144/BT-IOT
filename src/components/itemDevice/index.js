import React from "react";
import {Text, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";

export const ItemDevice = ({device, status, type, handleNavigate, onOffHandle}) => (
    <TouchableOpacity
        style={{
            height: 120,
            width: '45%',
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
                {
                    Door: <MaterialCommunityIcons name={'door'} style={{fontSize: 70}} />,
                    TV: (
                        <MaterialCommunityIcons
                            name={'television'}
                            style={{fontSize: 70}}
                        />
                    ),
                    Air: <Feather name={'airplay'} style={{fontSize: 70}} />,
                }[type]
            }
            <TouchableOpacity
                style={{
                    height: 50,
                    width: 50,
                    backgroundColor: status ? '#0E4DA4' : 'gray',
                    borderRadius: 25,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={onOffHandle}
            >
                <AntDesign
                    name={'poweroff'}
                    style={{fontSize: 25, color: status === 1 ? 'white' : 'black'}}
                />
            </TouchableOpacity>
        </View>
    </TouchableOpacity>
);
