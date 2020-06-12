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
  token: string
}

export type AuthResponseHeaders = { 'access-token': string, client: string, uid: string };
