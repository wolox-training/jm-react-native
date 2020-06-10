import { AUTH_REDUCER, BOOK_REDUCER } from '@redux/constants';

import { AuthState } from './auth';
import { BooksState } from './book';

export interface AppState {
  [AUTH_REDUCER]: AuthState;
  [BOOK_REDUCER]: BooksState;
}
