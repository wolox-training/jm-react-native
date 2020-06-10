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
  books: Book[] | null;
  booksLoading: boolean;
  booksError: string | null;
}
