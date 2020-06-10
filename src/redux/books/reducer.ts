import { BookAction, BooksState } from '@interfaces/book';

import { actions as bookActions } from './actions';

const initialState: BooksState = {
  books: [],
  booksLoading: false,
  booksError: null
};

function booksReducer(state = initialState, action: BookAction): BooksState {
  switch (action.type) {
    case bookActions.GET_BOOKS:
      return { ...state, booksLoading: true };

    case bookActions.GET_BOOKS_SUCCESS:
      return { ...state, books: action.payload, booksLoading: false };

    case bookActions.GET_BOOKS_FAILURE:
      return { ...state, booksLoading: false, booksError: action.payload };

    default:
      return state;
  }
}

export default booksReducer;
