import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import withLoading from '@components/WithLoading';
import { AppState } from '@interfaces/appState';
import bookActions from '@redux/books/actions';
import { BOOK_REDUCER } from '@redux/constants';

import BookList from './layout';

function BookListContainer() {
  const BookListWithLoading = withLoading(BookList);
  const dispatch = useDispatch();
  const { books, booksLoading } = useSelector((state: AppState) => state[BOOK_REDUCER]);

  useEffect(() => {
    dispatch(bookActions.getBooks());
  }, [dispatch]);

  return <BookListWithLoading loading={booksLoading} books={books} />;
}
export default BookListContainer;
