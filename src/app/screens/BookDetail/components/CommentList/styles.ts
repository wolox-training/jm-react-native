import { StyleSheet } from 'react-native';
import { white, blue } from '@constants/colors';
import { SHADOW } from '@constants/styleHelpers';

export default StyleSheet.create({
  commentSection: {
    ...SHADOW,
    backgroundColor: white,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 5
  },
  viewAllButton: {
    alignSelf: 'center'
  },
  viewAllButtonText: {
    color: blue,
    fontSize: 16,
    lineHeight: 20
  }
});
