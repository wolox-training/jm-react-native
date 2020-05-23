import { StyleSheet } from 'react-native';
import { white, lightBlue } from '@constants/colors';

export default StyleSheet.create({
  header: {
    height: 100
  },
  headerTitle: {
    color: white,
    fontWeight: '600',
    letterSpacing: -0.4,
    fontSize: 16,
    lineHeight: 24
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
