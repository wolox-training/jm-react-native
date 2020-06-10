import { ApiResponse } from 'apisauce';
import { Dispatch } from 'redux';

import { BooksResponse } from '@interfaces/api';
import BookService from '@services/BookService';

export const actions = {
  GET_BOOKS: '@@BOOK/GET_BOOKS',
  GET_BOOKS_SUCCESS: '@@BOOK/GET_BOOKS_SUCCESS',
  GET_BOOKS_FAILURE: '@@BOOK/GET_BOOKS_FAILURE'
} as const;

export const bookActions = {
  getBooks: () => async (dispatch: Dispatch) => {
    dispatch({ type: actions.GET_BOOKS });
    const response: ApiResponse<BooksResponse, string> = await BookService.getBooks();
    if (response.ok) {
      dispatch({ type: actions.GET_BOOKS_SUCCESS, payload: response.data?.books });
    } else {
      dispatch({ type: actions.GET_BOOKS_FAILURE, payload: response.problem });
    }
  }
};

export default bookActions;
