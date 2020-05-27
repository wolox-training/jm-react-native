import { StyleSheet } from 'react-native';
import { white, lightBlue } from '@constants/colors';
import { MEDIUM_FONT } from '@constants/styleHelpers';

export default StyleSheet.create({
  header: {
    height: 100
  },
  headerTitle: {
    ...MEDIUM_FONT,
    color: white,
    fontWeight: '600',
    letterSpacing: -0.4
  },
  goBackButton: {
    width: 20,
    height: 20,
    marginLeft: 12
  },
  headerBackground: {
    width: '100%',
    resizeMode: 'stretch',
    backgroundColor: lightBlue,
    height: '100%'
  }
});
