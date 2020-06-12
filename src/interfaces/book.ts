import { actions as bookActions } from '@redux/books/actions';

export interface Book {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  image?: { url: string };
}

export interface BooksState {
  books: Book[] | null;
  booksLoading: boolean;
  booksError: string | null;
}

interface GetBooksAction {
  type: typeof bookActions.GET_BOOKS;
}

interface GetBooksSuccessAction {
  type: typeof bookActions.GET_BOOKS_SUCCESS;
  payload: Book[];
}

interface GetBooksFailureAction {
  type: typeof bookActions.GET_BOOKS_FAILURE;
  payload: string;
}

export type BookAction = GetBooksAction | GetBooksSuccessAction | GetBooksFailureAction;
