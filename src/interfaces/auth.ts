/* eslint-disable prettier/prettier */
import { actions as authActions } from '@redux/auth/actions';

export interface UserCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  userLoading: boolean;
  userError: string | null;
}

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  uid: string;
}

interface LoginAction {
  type: typeof authActions.LOGIN;
}

interface LoginSuccessAction {
  type: typeof authActions.LOGIN_SUCCESS;
  payload: User;
}

interface LoginFailureAction {
  type: typeof authActions.LOGIN_FAILURE;
  payload: string;
}

export type AuthActionTypes = LoginAction | LoginSuccessAction | LoginFailureAction
