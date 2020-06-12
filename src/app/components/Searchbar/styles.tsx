import { StyleSheet, Platform } from 'react-native';

import { white } from '@constants/colors';

export default StyleSheet.create({
  searchbar: {
    backgroundColor: white,
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchbarLeftIcon: {
    width: 13,
    height: 13
  },
  searchbarInput: {
    ...Platform.select({
      ios: {
        paddingVertical: 8
      },
      android: {
        paddingVertical: 3
      }
    }),
    paddingHorizontal: 12,
    fontSize: 14,
    lineHeight: 16,
    width: 300,
    flexGrow: 1
  },
  clearTextIcon: {
    width: 15,
    height: 15
  }
});
