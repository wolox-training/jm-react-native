import { createSelector } from 'reselect';

import { AppState } from '@interfaces/appState';
import { Book } from '@interfaces/book';

import { titleAscSorter, bookTitleFilter } from './utils';

const booksSelector = (state: AppState) => state.book.books;
const querySelector = (state: AppState) => state.book.querySearch;

export const getFilteredBooks = createSelector(booksSelector, querySelector, (books: Book[], query) => {
  return books.filter(bookTitleFilter(query)).sort(titleAscSorter);
});
