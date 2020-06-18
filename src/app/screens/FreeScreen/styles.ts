import { StyleSheet } from 'react-native';

import { white } from '@constants/colors';

const ANIMATION_SIZE = 250;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  inside: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: white,
    height: '100%'
  },
  animation: {
    width: ANIMATION_SIZE,
    height: ANIMATION_SIZE
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20
  }
});
