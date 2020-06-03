import { createContext, useContext } from 'react';

interface AuthContextValue {
  setUserIsAuth: (value: boolean) => void;
}

const AuthContext = createContext({} as AuthContextValue);

export const useAuthContext = () => useContext(AuthContext);

export default AuthContext.Provider;
