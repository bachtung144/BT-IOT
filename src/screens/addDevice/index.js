import React, { useState } from "react";
import { View, Text, Picker, TextInput, TouchableOpacity } from "react-native";
import { styles } from './style';

export const AddDevice =() => {
  const [selectedValue, setSelectedValue] = useState('Air');
  return(
    <View style={{flex:1,marginHorizontal:10,justifyContent:'center'}}>

      <View style={{marginTop:20}}>
        <Text style={{fontSize:20}}>Chọn loại thiết bị</Text>
        <View
          style={{
            borderWidth: 1,
            height: 50,
            marginTop: 10,
            backgroundColor: 'white',
          }}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Điều hòa" value="Air" />
            <Picker.Item label="Cửa thông minh" value="Door" />
            <Picker.Item label="Tivi" value="TV" />
          </Picker>
        </View>
      </View>

      <View style={{marginTop:50}}>
        <Text style={{fontSize:20}}>Tên thiết bị</Text>
        <TextInput
          style={styles.txtInputNameDevice}
        />
      </View>

      <View style={{marginTop:'50%'}}>
        <TouchableOpacity style={styles.container}>
          <Text style={styles.title}>Thêm thiết bị</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}
