import { authApi } from '@config/api';
import { UserCredentials } from '@interfaces/auth';

const AuthService = {
  logIn: (credentials: UserCredentials) => authApi.post('/auth/sign_in', credentials)
};

export default AuthService;
