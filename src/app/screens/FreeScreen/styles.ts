import { StyleSheet } from 'react-native';

import { white } from '@constants/colors';

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
    width: 250,
    height: 250
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 20
  }
});
