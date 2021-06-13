import AsyncStorage from '@react-native-async-storage/async-storage';

export const Storage = {

    getItem: async function (key: string) {
        try {
                const item = await AsyncStorage.getItem(key) ?? "";
                return JSON.parse(item);
              } catch (error) {
                  console.error(error)
              }
    },
    setItem: async function (key: string, value: any) {
        return await AsyncStorage.setItem(key, JSON.stringify(value));
    },
    removeItem: async function (key: string) {
        return await AsyncStorage.removeItem(key);
    },

 
        // setItem: async (key: string, value: any) => {
        //   try {
        //     await AsyncStorage.setItem(key, JSON.stringify(value));
        //   } catch (error) {}
        // },
        // getItem: async (key: string) => {
        //   try {
        //     const item = await AsyncStorage.getItem(key);
      
        //     return JSON.parse(item);
        //   } catch (error) {}
        // },
        // removeItem: async (key: string) => {
        //   try {
        //     await AsyncStorage.removeItem(key);
        //   } catch (error) {}
        // },
        // updateItem: async (key: string, value: any) => {
        //   try {
        //     const item = await AsyncStorage.getItem(key);
        //     const result = {...JSON.parse(item), ...value};
      
        //     await AsyncStorage.setItem(key, JSON.stringify(result));
        //   } catch (error) {}
        // },
};