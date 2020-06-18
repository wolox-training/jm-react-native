import { StyleSheet } from 'react-native';

import { black2, gray } from '@constants/colors';
import { MEDIUM_FONT } from '@constants/styleHelpers';

export default StyleSheet.create({
  fallback: {
    alignItems: 'center',
    marginTop: 80
  },
  fallbackIcon: {
    width: 50,
    height: 50,
    marginBottom: 20
  },
  fallbackTitle: {
    ...MEDIUM_FONT,
    fontWeight: 'bold',
    color: black2,
    marginBottom: 12
  },
  fallbackMessage: {
    ...MEDIUM_FONT,
    color: gray,
    width: 220,
    textAlign: 'center'
  }
});
