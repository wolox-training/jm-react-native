import { StyleSheet, Platform } from 'react-native';
import { white, gray } from '@constants/colors';
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
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderColor: white,
    marginTop: 24
  },
  loginButtonDisabled: {
    opacity: 0.5
  },
  loginButtonText: {
    color: white,
    ...Platform.select({
      ios: {
        fontWeight: '800'
      },
      android: {
        fontWeight: '700'
      }
    }),
    fontSize: 16
  },
  emailField: {
    ...FIELD,
    marginBottom: 12
  }
});
