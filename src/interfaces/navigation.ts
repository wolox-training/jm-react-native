import { Book } from './book';

import Routes from '@constants/routes';

export type LibraryNavigatorParams = {
  [Routes.BookList]: undefined;
  [Routes.BookDetail]: { book: Book };
};

export type DashboardNavigatorParams = {
  [Routes.Library]: undefined;
  [Routes.Wishlist]: undefined;
};

export type AuthNavigatorParams = {
  [Routes.Login]: undefined;
  [Routes.Dashboard]: undefined;
};
