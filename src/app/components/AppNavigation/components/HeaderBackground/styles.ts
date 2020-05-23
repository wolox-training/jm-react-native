import { StyleSheet } from 'react-native';
import { red } from '@constants/colors';

export default StyleSheet.create({
  header: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'stretch',
    width: '100%',
    height: 100,
    backgroundColor: red
  }
});
