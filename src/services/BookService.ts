import api from '@config/api';
import { BooksResponse } from '@interfaces/api';

type BooksPromise = Promise<BooksResponse>;

const BookService = {
  getBooks: (): BooksPromise => api.get('/books')
};

export default BookService;
