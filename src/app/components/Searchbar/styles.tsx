import { StyleSheet } from 'react-native';

import { white } from '@constants/colors';

export default StyleSheet.create({
  searchbar: {
    backgroundColor: white,
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  searchbarLeftIcon: {
    width: 13,
    height: 13,
    flexGrow: 1
  },
  searchbarInput: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 14,
    lineHeight: 16,
    width: 300
  },
  clearTextIcon: {
    width: 15,
    height: 15,
    flexGrow: 1
  }
});
