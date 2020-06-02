import api from '@config/api';

export default {
  getBookDetail: (id: number) => api.get(`api/v1/books/${id}`)
};
