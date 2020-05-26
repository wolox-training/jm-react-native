import Routes from '@constants/routes';

import { Book } from './book';

export type RootStackParamList = {
  [Routes.Library]: undefined;
  [Routes.BookDetail]: { book: Book };
};
