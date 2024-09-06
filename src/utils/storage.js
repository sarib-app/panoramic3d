// src/utils/storage.js
import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeImageData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Error storing data', error);
  }
};

export const getImageData = async (key) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error('Error retrieving data', error);
  }
};
