import React from 'react';
import { useSelector } from 'react-redux';

import BookList from '@components/BookList';
import SearchEmptyFallback from '@components/SearchEmptyFallback';
import { AppState } from '@interfaces/appState';

import { titleAscSorter, bookTitleFilter } from './utils';

function Search() {
  const querySearch = useSelector((state: AppState) => state.book.querySearch);
  const books = useSelector((state: AppState) => state.book.books);
  const filteredBooks = books.filter(bookTitleFilter(querySearch)).sort(titleAscSorter);

  return <BookList books={filteredBooks} emptyComponent={SearchEmptyFallback} />;
}

export default Search;
