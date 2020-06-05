import { ApiResponse } from 'apisauce';

import api from '@config/api';
import { LoginResponse } from '@interfaces/api';
import { UserCredentials } from '@interfaces/auth';

type LoginPromise = Promise<ApiResponse<LoginResponse, string>>;

const AuthService = {
  logIn: (credentials: UserCredentials): LoginPromise => api.post('/auth/sign_in', credentials)
};

export default AuthService;
