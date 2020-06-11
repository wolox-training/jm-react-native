import { StyleSheet } from 'react-native';

import { white } from '@constants/colors';

export default StyleSheet.create({
  searchbar: {
    backgroundColor: white,
    borderRadius: 100,
    paddingHorizontal: 8,
    height: 28,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchbarLeftIcon: {
    width: 13,
    height: 13,
    marginRight: 12
  },
  searchbarInput: {
    width: 300,
    fontSize: 14,
    lineHeight: 16
  }
});
