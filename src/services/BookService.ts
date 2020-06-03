import api from '@config/api';

const BookService = {
  getBookDetail: (id: number) => api.get(`api/v1/books/${id}`)
};

export default BookService;
