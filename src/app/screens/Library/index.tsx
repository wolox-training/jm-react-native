import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookList from '@app/components/BookList';
import { AppState } from '@interfaces/appState';
import BookService from '@services/BookService';

function Library() {
  const dispatch = useDispatch();
  const books = useSelector((state: AppState) => state.book.books);

  useEffect(() => {
    dispatch(BookService.getBooks());
  }, [dispatch]);

  return <BookList books={books} />;
}

export default Library;
