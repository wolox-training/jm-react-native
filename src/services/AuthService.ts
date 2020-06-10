import AsyncStorage from '@react-native-community/async-storage';
import { ApiOkResponse } from 'apisauce';
import { Dispatch } from 'redux';
import { wrapService, withSuccess } from 'redux-recompose';

import api from '@config/api';
import STORAGE from '@constants/storage';
import { UserResponse } from '@interfaces/api';
import { UserCredentials, AuthResponseHeaders, User } from '@interfaces/auth';
import { actions } from '@redux/auth/actions';

import { deserializer } from './utlis';

type LoginPromise = Promise<UserResponse>;
type SaveAuthArgs = { user: User; authHeaders: AuthResponseHeaders };

export const AuthLocalService = {
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

const logIn = (credentials: UserCredentials): LoginPromise => api.post('/auth/sign_in', credentials);

logIn.injections = [
  withSuccess((dispatch: Dispatch, response: ApiOkResponse<{ data: User }>) => {
    const { 'access-token': accessToken, client, uid } = response.headers as AuthResponseHeaders;
    const user = deserializer.serialize(response!.data?.data);

    AuthLocalService.saveAuth({
      user,
      authHeaders: { 'access-token': accessToken, client, uid }
    }).then(() => dispatch({ type: actions.LOGIN_SUCCESS, target: 'user', payload: user }));
  })
];

const authService = {
  logIn
};

export default wrapService(authService, 'auth', { logIn: 'auth' });
