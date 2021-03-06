export interface Book {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  image?: { url: string };
}

export interface BooksState {
  books: Book[];
  booksLoading: boolean;
  booksError: string | null;
  querySearch: string;
}
