import  {AsyncStorage} from "react-native";

export const _retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {

    }
  } catch (error) {
    return 0;
  }

};
