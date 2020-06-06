import AsyncStorage from '@react-native-community/async-storage';
import { useEffect, useState } from 'react';

import STORAGE from '@constants/storage';

export const useAsyncStorage = (key: string, initalValue: any) => {
  const [storedValue, setStoredValue] = useState(initalValue);

  useEffect(() => {
    AsyncStorage.getItem(STORAGE.accessToken)
      .then(value => (value === null ? initalValue : JSON.stringify(value)))
      .then(setStoredValue)
      // eslint-disable-next-line no-console
      .catch(error => console.log(`There was an error retriving ${key} fron AsyncStorage! -->`, error));
  }, [key, initalValue]);

  return storedValue;
};
