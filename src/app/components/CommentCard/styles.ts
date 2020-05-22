import { StyleSheet } from 'react-native';
import { black2, gray } from '@constants/colors';

export default StyleSheet.create({
  comment: {
    marginBottom: 30,
    flexDirection: 'row'
  },
  commentSummary: {
    flex: 1
  },
  commentAuthor: {
    color: black2,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 16,
    marginBottom: 8
  },
  commentContent: {
    color: gray,
    fontSize: 16,
    lineHeight: 20
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 45 / 2,
    marginRight: 20
  }
});
