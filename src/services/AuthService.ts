import AsyncStorage from '@react-native-community/async-storage';
import { ApiResponse } from 'apisauce';

import api from '@config/api';
import STORAGE from '@constants/storage';
import { LoginResponse } from '@interfaces/api';
import { UserCredentials, User } from '@interfaces/auth';

type LoginPromise = Promise<ApiResponse<LoginResponse, string>>;

const AuthService = {
  logIn: (credentials: UserCredentials): LoginPromise => api.post('/auth/sign_in', credentials),
  getAuthData: () => AsyncStorage.getItem(STORAGE.user).then(user => user && JSON.parse(user)),
  setAuthData: (user: User) =>
    AsyncStorage.setItem(STORAGE.user, JSON.stringify(user), () =>
      api.setHeader('Authorization', user.token)
    ),
  removeAuthData: () => AsyncStorage.removeItem(STORAGE.user)
};

export default AuthService;
