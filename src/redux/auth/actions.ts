import AuthService from '@services/AuthService';
import { UserCredentials } from '@interfaces/auth';
import { Dispatch } from 'redux';

export const actions = {
  LOGIN: '@@AUTH/LOGIN',
  LOGIN_SUCCESS: '@@AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@AUTH/LOGIN_FAILURE'
} as const;

const actionCreators = {
  logIn: (credentials: UserCredentials) => async (dispatch: Dispatch) => {
    dispatch({ type: actions.LOGIN });
    const response = await AuthService.logIn(credentials);
    if (response.ok) {
      dispatch({
        type: actions.LOGIN_SUCCESS,
        payload: response.data
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
