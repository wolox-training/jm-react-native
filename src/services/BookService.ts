import { ApiResponse } from 'apisauce';

import api from '@config/api';
import { BooksResponse } from '@interfaces/api';

type BooksPromise = Promise<ApiResponse<BooksResponse, string>>;

const BookService = {
  getBooks: (): BooksPromise => api.get('api/v1/books'),
  getBookDetail: (id: number) => api.get(`api/v1/books/${id}`)
};

export default BookService;
