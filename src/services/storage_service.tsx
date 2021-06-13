import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {
  getItem: async function (key: string) {
    try {
      const item = (await AsyncStorage.getItem(key)) ?? '';
      return JSON.parse(item);
    } catch (error) {
      console.error(error);
    }
  },
  setItem: async function (key: string, value: any) {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async function (key: string) {
    return await AsyncStorage.removeItem(key);
  },
};
