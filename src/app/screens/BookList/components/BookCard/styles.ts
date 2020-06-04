import { StyleSheet } from 'react-native';

import { white, gray } from '@constants/colors';
import { SHADOW, MEDIUM_FONT } from '@constants/styleHelpers';

export default StyleSheet.create({
  book: {
    ...SHADOW,
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: white,
    width: '100%',
    marginBottom: 12,
    flex: 1
  },
  bookSummary: {
    flex: 1
  },
  bookCover: {
    marginRight: 12,
    width: 40,
    height: 60,
    resizeMode: 'contain'
  },
  bookTitle: {
    ...MEDIUM_FONT,
    fontWeight: 'bold',
    marginBottom: 4,
    color: gray
  },
  bookAuthor: {
    fontSize: 14,
    lineHeight: 18,
    color: gray
  }
});
