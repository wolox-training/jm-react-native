import { StyleSheet } from 'react-native';
import { white, blue } from '@constants/colors';

export default StyleSheet.create({
  commentSection: {
    backgroundColor: white,
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 5
  },
  commentList: {},
  viewAllButton: {
    alignSelf: 'center'
  },
  viewAllButtonText: {
    color: blue,
    fontSize: 16,
    lineHeight: 20
  }
});
