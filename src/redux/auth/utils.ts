import AsyncStorage from '@react-native-community/async-storage';

import api from '@config/api';
import STORAGE from '@constants/storage';
import { AuthResponseHeaders } from '@interfaces/auth';

export const persistAuth = (responseHeaders: AuthResponseHeaders) => {
  const { 'access-token': accessToken, client, uid } = responseHeaders;
  const storageEntries = [
    [STORAGE.accessToken, accessToken],
    [STORAGE.client, client],
    [STORAGE.uid, uid]
  ];
  const updateAuthHeaders = () => {
    api.setHeaders({
      'access-token': accessToken,
      client,
      uid
    });
  };

  AsyncStorage.multiSet(storageEntries, updateAuthHeaders).catch(error =>
    // eslint-disable-next-line no-console
    console.log('Authentication cannot be persisted! -->', error)
  );
};
