import { StyleSheet } from 'react-native';
import { white, gray, blue, lightGray, red } from '@constants/colors';
import { SHADOW } from '@constants/styleHelpers';

export default StyleSheet.create({
  bookInfo: {
    ...SHADOW,
    backgroundColor: white,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center'
  },
  bookInfoInside: {
    flexDirection: 'row',
    marginBottom: 30
  },
  bookSummary: {
    flex: 1
  },
  bookCover: {
    width: 70,
    height: 110,
    marginRight: 20
  },
  bookTitle: {
    fontSize: 24,
    lineHeight: 28,
    fontWeight: 'bold',
    color: gray
  },
  bookStatus: {
    color: red,
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 20
  },
  bookBasicAttribute: {
    fontSize: 16,
    lineHeight: 20,
    color: gray,
    textTransform: 'capitalize'
  },
  bookDetailActions: {
    width: '100%'
  },
  watchlistButton: {
    borderColor: blue,
    borderWidth: 2,
    borderRadius: 100,
    marginBottom: 10
  },
  watchlistButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: blue,
    padding: 12,
    textAlign: 'center'
  },
  rentButton: {
    borderRadius: 100,
    backgroundColor: lightGray
  },
  rentButtonText: {
    color: white,
    padding: 12,
    fontWeight: '800',
    fontSize: 16,
    textAlign: 'center'
  }
});
