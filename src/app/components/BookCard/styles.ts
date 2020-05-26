import { StyleSheet } from 'react-native';
import { white, gray, black } from '@constants/colors';

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
    elevation: 1,
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
