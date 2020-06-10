import { User } from './auth';
import { Book } from './book';

export type LoginResponse = {
  data: User;
};

export type BooksResponse = {
  books: Book[];
};
