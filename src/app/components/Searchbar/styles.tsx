import { StyleSheet, Platform } from 'react-native';

import { white } from '@constants/colors';

export default StyleSheet.create({
  searchbar: {
    backgroundColor: white,
    borderRadius: 100,
    paddingHorizontal: 8,
    paddingVertical: 0,
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
    ...Platform.select({
      ios: {
        paddingVertical: 5
      }
    }),
    width: 300,
    fontSize: 14,
    lineHeight: 16,
    padding: 0
  }
});
