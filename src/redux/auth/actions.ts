import { Dispatch } from 'redux';
import { ApiResponse } from 'apisauce';
import { UserCredentials } from '@interfaces/auth';
import AuthService from '@services/AuthService';
import { deserializer } from '@services/utlis';
import { LoginResponse } from '@interfaces/api';

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
