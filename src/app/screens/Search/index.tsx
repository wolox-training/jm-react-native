import React from 'react';
import { useSelector } from 'react-redux';

import BookList from '@components/BookList';
import SearchEmptyFallback from '@components/SearchEmptyFallback';

import { getFilteredBooks } from './selectors';

function Search() {
  const filteredBooks = useSelector(getFilteredBooks);
  return <BookList books={filteredBooks} emptyComponent={SearchEmptyFallback} />;
}

export default Search;
