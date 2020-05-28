import Routes from '@constants/routes';

import { Book } from './book';

export type RootStackParamList = {
  [Routes.BookList]: undefined;
  [Routes.BookDetail]: { book: Book };
};

export type RootTabParamList = {
  [Routes.Library]: undefined;
  [Routes.Wishlist]: undefined;
};
