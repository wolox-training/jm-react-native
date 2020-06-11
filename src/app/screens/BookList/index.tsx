import React, { useEffect, FC } from 'react';
import { ListRenderItem, FlatList, FlatListProps } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import withLoading from '@components/WithLoading';
import { AppState } from '@interfaces/appState';
import { Book } from '@interfaces/book';
import BookService from '@services/BookService';

import BookCard from './components/BookCard';
import styles from './styles';

interface Props {
  booksFilter?: (value: Book, index: number, array: Book[]) => boolean;
  emptyComponent?: FC;
}

function BookList({ booksFilter, emptyComponent }: Props) {
  const dispatch = useDispatch();
  const { books, booksLoading } = useSelector((state: AppState) => state.book);
  const LoadableFlatlist = withLoading(FlatList) as FC<FlatListProps<Book> & { loading: boolean }>;
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item, index }) => (
    <BookCard customStyle={index !== books!?.length - 1 && styles.bookListItem} {...item} />
  );

  useEffect(() => {
    if (books.length === 0) {
      dispatch(BookService.getBooks());
    }
  }, [books.length, dispatch]);

  return (
    <LoadableFlatlist
      loading={booksLoading}
      data={booksFilter ? books.filter(booksFilter) : books}
      renderItem={renderBook}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.bookListInside}
      ListEmptyComponent={emptyComponent}
      style={styles.bookList}
    />
  );
}

export default BookList;
