import AuthService from '@services/AuthService';
import { UserCredentials } from '@interfaces/auth';
import { ThunkAction } from 'redux-thunk';

export const actions = {
  LOGIN: 'LOGIN_LOADING',
  LOGIN_SUCCESS: '@@AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: '@@AUTH/LOGIN_FAILURE'
};

const actionCreators = {
  logIn: (credentials: UserCredentials) => async (dispatch: any) => {
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
