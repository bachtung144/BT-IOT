import { AsyncStorage } from "react-native";

export const _removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.warn('removed')
    return true;
  }
  catch(exception) {
    return false;
  }
}
