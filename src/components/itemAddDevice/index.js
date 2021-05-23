import {TouchableOpacity} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import React from "react";

export const ItemAddDevice = ({navigation}) => {
    return(
        <TouchableOpacity
            style={{
                height: 120,
                width: '45%',
                justifyContent:'center',
                alignItems:'center',
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
            onPress={() => navigation.navigate('AddDevice')}
        >
            <AntDesign name={'pluscircleo'} style={{fontSize:80,color:'#0E4DA4'}}/>
        </TouchableOpacity>
    )
}
