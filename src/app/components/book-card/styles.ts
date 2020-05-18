import { StyleSheet } from 'react-native';
import { white, gray } from '@constants/colors';

export default StyleSheet.create({
  book: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    flexDirection: 'row',
    backgroundColor: white
  },
  bookCover: {
    marginRight: 12,
    width: 40,
    height: 60,
    resizeMode: 'contain'
  },
  bookTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20,
    marginBottom: 4,
    color: gray
  },
  bookAuthor: {
    fontSize: 14,
    lineHeight: 18,
    color: gray
  }
});
