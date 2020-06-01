import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';
import { FIELD, ROUNDED_BUTTON } from '@constants/styleHelpers';

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
    ...ROUNDED_BUTTON,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderColor: white,
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
