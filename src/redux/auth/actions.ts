import AsyncStorage from '@react-native-community/async-storage';
import { ApiResponse } from 'apisauce';
import { Dispatch } from 'redux';

import api from '@config/api';
import STORAGE from '@constants/storage';
import { LoginResponse } from '@interfaces/api';
import { UserCredentials, User } from '@interfaces/auth';
import AuthService from '@services/AuthService';
import { deserializer } from '@services/utlis';

export const actions = {
  LOGIN: '@@AUTH/LOGIN',
  LOGIN_SUCCESS: '@@AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@AUTH/LOGIN_FAILURE'
} as const;

const actionCreators = {
  loginSuccess: (user: User) => (dispatch: Dispatch) => {
    AuthService.setAuthData(user);
    dispatch({
      type: actions.LOGIN_SUCCESS,
      payload: user
    });
  },
  logIn: (credentials: UserCredentials) => async (dispatch: Dispatch) => {
    dispatch({ type: actions.LOGIN });
    const response: ApiResponse<LoginResponse, string> = await AuthService.logIn(credentials);

    if (response.ok) {
      const responseHeaders = response.headers as { 'access-token': string };
      dispatch<any>(
        actionCreators.loginSuccess(
          deserializer.serialize({ ...response!.data?.data, token: responseHeaders['access-token'] })
        )
      );
    } else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionCreators;
