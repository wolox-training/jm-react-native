import { ApiResponse } from 'apisauce';
import { Dispatch } from 'redux';

import { LoginResponse } from '@interfaces/api';
import { UserCredentials, AuthResponseHeaders } from '@interfaces/auth';
import AuthService from '@services/AuthService';
import { deserializer } from '@services/utlis';

import { persistAuth } from './utils';

export const actions = {
  LOGIN: '@@AUTH/LOGIN',
  LOGIN_SUCCESS: '@@AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@AUTH/LOGIN_FAILURE'
} as const;

const actionCreators = {
  logIn: (credentials: UserCredentials) => async (dispatch: Dispatch) => {
    dispatch({ type: actions.LOGIN });
    const response: ApiResponse<LoginResponse, string> = await AuthService.logIn(credentials);
    if (response.ok) {
      persistAuth(response.headers as AuthResponseHeaders);
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: deserializer.serialize(response!.data?.data)
      });
    } else {
      dispatch({
        type: actions.LOGIN_FAILURE,
        payload: response.problem
      });
    }
  }
};

export default actionCreators;
