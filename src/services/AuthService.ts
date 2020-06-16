import AsyncStorage from '@react-native-community/async-storage';
import { ApiOkResponse } from 'apisauce';
import { Dispatch } from 'redux';
import { wrapService, withSuccess } from 'redux-recompose';

import api from '@config/api';
import { UserResponse } from '@interfaces/api';
import { UserCredentials, AuthResponseHeaders, User } from '@interfaces/auth';
import { actions } from '@redux/auth/actions';

import AuthLocalService from './AuthLocalService';
import { deserializer } from './utlis';

type LoginPromise = Promise<UserResponse>;

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
