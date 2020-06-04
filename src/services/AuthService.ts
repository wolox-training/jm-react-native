import api from '@config/api';
import { UserCredentials } from '@interfaces/auth';
import { LoginResponse } from '@interfaces/api';
import { ApiResponse } from 'apisauce';

type LoginPromise = Promise<ApiResponse<LoginResponse, string>>;

const AuthService = {
  logIn: (credentials: UserCredentials): LoginPromise => api.post('/auth/sign_in', credentials)
};

export default AuthService;
