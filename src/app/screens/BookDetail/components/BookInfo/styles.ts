import { StyleSheet } from 'react-native';

import { white, gray, blue, lightGray, red } from '@constants/colors';
import { SHADOW, MEDIUM_FONT, ROUNDED_BUTTON } from '@constants/styleHelpers';

export const RENT_BORDER_RADIUS = 100;
export const BUTTON_HEIGHT = 44;
export const BUTTON_WIDTH = 275;

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
    width: '100%',
    alignItems: 'center'
  },
  watchlistButton: {
    ...ROUNDED_BUTTON,
    borderColor: blue,
    marginBottom: 10,
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT,
    justifyContent: 'center'
  },
  watchlistButtonText: {
    fontSize: 16,
    fontWeight: '800',
    color: blue,
    textAlign: 'center'
  },
  rentButtonWrapper: {
    borderRadius: RENT_BORDER_RADIUS
  },
  rentButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: BUTTON_WIDTH,
    height: BUTTON_HEIGHT
  },
  rentButtonText: {
    color: white,
    fontWeight: '800',
    fontSize: 16,
    textAlign: 'center'
  },
  rentedIcond: {
    width: 20,
    height: 20
  }
});
