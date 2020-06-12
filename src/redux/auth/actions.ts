import { Dispatch } from 'redux';
import { createTypes, completeTypes } from 'redux-recompose';

import api from '@config/api';
import { User, AuthResponseHeaders } from '@interfaces/auth';
import { AuthLocalService } from '@services/AuthService';

const serviceTypes = ['LOGIN'];

export const actions = createTypes(completeTypes(serviceTypes, ['LOGOUT', 'REHYDRATE_AUTH']), '@@AUTH');

const actionCreators = {
  logOut: () => (dispatch: Dispatch) => {
    AuthLocalService.cleanUser();
    dispatch({
      type: actions.LOGOUT,
      target: 'user'
    });
  },
  rehydrateAuth: (user: User, authHeaders: AuthResponseHeaders) => (dispatch: Dispatch) => {
    api.setHeaders(authHeaders);
    dispatch({ type: actions.REHYDRATE_AUTH, target: 'user', payload: user });
  }
};

export default actionCreators;
