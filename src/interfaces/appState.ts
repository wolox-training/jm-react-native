import { AuthState } from './auth';
import { BooksState } from './book';

export interface AppState {
  auth: AuthState;
  book: BooksState;
}
