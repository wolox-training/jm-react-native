import { Book } from '@interfaces/book';

export const titleAscSorter = (x: Book, y: Book) => {
  const titleX = x.title.toLowerCase();
  const titleY = y.title.toLowerCase();
  if (titleX < titleY) {
    return -1;
  } else if (titleX > titleY) {
    return 1;
  }
  return 0;
};

export const emptyQueryFilter = () => [];
