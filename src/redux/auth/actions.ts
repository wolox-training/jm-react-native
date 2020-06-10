import AsyncStorage from '@react-native-community/async-storage';
import { ApiResponse } from 'apisauce';
import { Dispatch } from 'redux';

import api from '@config/api';
import STORAGE from '@constants/storage';
import { LoginResponse } from '@interfaces/api';
import { UserCredentials, AuthResponseHeaders, User } from '@interfaces/auth';
import AuthService from '@services/AuthService';
import { deserializer } from '@services/utlis';

export const actions = {
  LOGIN: '@@AUTH/LOGIN',
  LOGIN_SUCCESS: '@@AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@AUTH/LOGIN_FAILURE',
  LOGOUT: '@@AUTH/LOGOUT'
} as const;

const actionCreators = {
  loginSuccess: (user: User, authHeaders: AuthResponseHeaders) => (dispatch: Dispatch) => {
    AuthService.saveAuth({ user, authHeaders });

    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: user
    });
  },
  logIn: (credentials: UserCredentials) => async (dispatch: Dispatch) => {
    dispatch({ type: actions.LOGIN });
    const response: ApiResponse<LoginResponse, string> = await AuthService.logIn(credentials);

    if (response.ok) {
      const { 'access-token': accessToken, client, uid } = response.headers as AuthResponseHeaders;
      const user = deserializer.serialize(response!.data?.data);

      dispatch<any>(actionCreators.loginSuccess(user, { 'access-token': accessToken, client, uid }));
    } else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: response.problem
      });
    }
  },
  logOut: () => (dispatch: Dispatch) => {
    AuthService.cleanUser();
    dispatch({ type: actions.LOGOUT });
  }
};

export default actionCreators;
