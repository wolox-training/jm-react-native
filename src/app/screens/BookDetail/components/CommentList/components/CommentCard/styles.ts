import { StyleSheet } from 'react-native';
import { black2, gray } from '@constants/colors';
import { MEDIUM_FONT } from '@constants/styleHelpers';

const AVATAR_SIZE = 45;

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
    ...MEDIUM_FONT,
    color: gray
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    marginRight: 20
  }
});
