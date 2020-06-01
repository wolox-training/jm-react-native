import { StyleSheet } from 'react-native';
import { white, gray, blue, lightGray, red } from '@constants/colors';
import { SHADOW, MEDIUM_FONT } from '@constants/styleHelpers';

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
    ...MEDIUM_FONT,
    color: red,
    fontWeight: 'bold'
  },
  bookBasicAttribute: {
    ...MEDIUM_FONT,
    color: gray,
    textTransform: 'capitalize'
  },
  bookDetailActions: {
    width: '100%'
  },
  watchlistButton: {
    borderColor: blue,
    borderWidth: 1.5,
    borderRadius: 100,
    marginBottom: 10,
    padding: 12
  },
  watchlistButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: blue,
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
