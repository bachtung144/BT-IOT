import { AsyncStorage } from "react-native";

export const _storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(
      key,
      value
    );
    console.warn('store success')
  } catch (error) {
    console.warn(error)
    // Error saving data
  }
};
