import React from 'react';
import { useSelector } from 'react-redux';

import SearchEmptyFallback from '@components/SearchEmptyFallback';
import { AppState } from '@interfaces/appState';
import { Book } from '@interfaces/book';
import BookList from '@screens/BookList';

import { emptyQueryFilter, titleAscSorter } from './utils';

function Search() {
  const querySearch = useSelector((state: AppState) => state.book.querySearch);
  const bookTitleFilter = (book: Book) => book.title.toLowerCase().startsWith(querySearch.toLowerCase());
  const getFoundBooks = (books: Book[]) => books.filter(bookTitleFilter).sort(titleAscSorter);
  return (
    <BookList
      booksFilter={querySearch ? getFoundBooks : emptyQueryFilter}
      emptyComponent={SearchEmptyFallback}
    />
  );
}

export default Search;
