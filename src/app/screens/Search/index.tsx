import React from 'react';
import { useSelector } from 'react-redux';

import SearchEmptyFallback from '@components/SearchEmptyFallback';
import { AppState } from '@interfaces/appState';
import { Book } from '@interfaces/book';
import BookList from '@screens/BookList';

function Search() {
  const querySearch = useSelector((state: AppState) => state.book.querySearch);
  const bookTitleFilter = (book: Book) => book.title.toLowerCase().startsWith(querySearch.toLowerCase());
  const emptyQueryFilter = () => false;
  return (
    <BookList
      booksFilter={querySearch ? bookTitleFilter : emptyQueryFilter}
      emptyComponent={SearchEmptyFallback}
    />
  );
}

export default Search;
