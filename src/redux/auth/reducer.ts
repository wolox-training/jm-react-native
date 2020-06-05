import { AuthAction, AuthState } from '@interfaces/auth';

import { actions } from './actions';

const initalState: AuthState = {
  user: null,
  userLoading: false,
  userError: null
};

const authReducer = (state = initalState, action: AuthAction): AuthState => {
  switch (action.type) {
    case actions.LOGIN:
      return { ...state, userLoading: true };
    case actions.LOGIN_SUCCESS:
      return { ...state, user: action.payload, userLoading: false, userError: null };
    case actions.LOGIN_FAILURE:
      return { ...state, userError: action.payload as string, userLoading: false };
    default:
      return state;
  }
};

export default authReducer;
