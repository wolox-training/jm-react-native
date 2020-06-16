import Routes from '@constants/routes';

import { Book } from './book';

export type LibraryNavigatorParams = {
  [Routes.BookList]: undefined;
  [Routes.BookDetail]: { book: Book };
  [Routes.Search]: undefined;
};

export type DashboardNavigatorParams = {
  [Routes.Library]: undefined;
  [Routes.Wishlist]: undefined;
};

export type AuthNavigatorParams = {
  [Routes.Login]: undefined;
  [Routes.Dashboard]: undefined;
};
