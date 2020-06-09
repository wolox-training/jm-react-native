import AsyncStorage from '@react-native-community/async-storage';
import { useEffect, useState } from 'react';

export const useAsyncStorage = (key: string, initalValue: any) => {
  const [storedValue, setStoredValue] = useState(initalValue);

  useEffect(() => {
    AsyncStorage.getItem(key)
      .then(value => (value === null ? initalValue : JSON.parse(value)))
      .then(setStoredValue)
      // eslint-disable-next-line no-console
      .catch(error => console.log(`There was an error retriving ${key} fron AsyncStorage! -->`, error));
  }, [key, initalValue]);

  return storedValue;
};
