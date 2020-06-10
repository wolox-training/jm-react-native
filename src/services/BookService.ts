import { wrapService } from 'redux-recompose';

import api from '@config/api';
import { BooksResponse } from '@interfaces/api';

type BooksPromise = Promise<BooksResponse>;

const bookService = {
  getBooks: (): BooksPromise => api.get('/books')
};

export default wrapService(bookService, 'book', { getBooks: 'books' });
