import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';

export const FIELD = {
  width: 240,
  maxWidth: '80%',
  backgroundColor: white,
  padding: 12,
  borderRadius: 5,
  fontSize: 16
};

export default StyleSheet.create({
  loginBackground: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    marginBottom: 30
  },
  loginButton: {
    borderColor: white,
    borderWidth: 1.5,
    borderRadius: 100,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 24
  },
  loginButtonText: {
    color: white,
    fontWeight: '800',
    fontSize: 16
  },
  emailField: {
    ...FIELD,
    marginBottom: 12
  }
});
