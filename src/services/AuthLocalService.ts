import AsyncStorage from '@react-native-community/async-storage';

import api from '@config/api';
import STORAGE from '@constants/storage';
import { User, AuthResponseHeaders } from '@interfaces/auth';

type SaveAuthArgs = { user: User; authHeaders: AuthResponseHeaders };

const AuthLocalService = {
  getAuth: () =>
    AsyncStorage.multiGet([STORAGE.user, STORAGE.authHeaders]).then(auth => {
      const parsedData = auth.map(([key, value]) => [key, value && JSON.parse(value)]);
      return Object.fromEntries(parsedData);
    }),
  saveAuth: ({ user, authHeaders }: SaveAuthArgs) => {
    const storageEntries = [
      [STORAGE.user, JSON.stringify(user)],
      [STORAGE.authHeaders, JSON.stringify(authHeaders)]
    ];
    return AsyncStorage.multiSet(storageEntries, () => api.setHeaders(authHeaders));
  },
  cleanUser: () => AsyncStorage.removeItem(STORAGE.user)
};

export default AuthLocalService;
