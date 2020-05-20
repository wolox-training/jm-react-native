import Routes from '@constants/routes';

export type RootStackParamList = {
  [Routes.Library]: undefined;
  [Routes.BookDetail]: { bookId: number };
};
