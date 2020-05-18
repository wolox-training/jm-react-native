import { StyleSheet } from 'react-native';
import { white, gray, black } from '@constants/colors';

// 0 1px 1px 0 rgba(0,0,0,0.05);

export default StyleSheet.create({
  book: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 5,
    flexDirection: 'row',
    backgroundColor: white,
    width: '100%',
    shadowColor: black,
    shadowOpacity: 0.05,
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowRadius: 1,
    elevation: 1
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