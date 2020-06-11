import React, { useEffect, FC } from 'react';
import { ListRenderItem, FlatList, FlatListProps } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import withLoading from '@components/WithLoading';
import { AppState } from '@interfaces/appState';
import { Book } from '@interfaces/book';
import bookActions from '@redux/books/actions';

import BookCard from './components/BookCard';
import styles from './styles';

function BookListContainer() {
  const LoadableFlatlist = withLoading(FlatList) as FC<FlatListProps<Book> & { loading: boolean }>;
  const keyExtractor = ({ id }: Book) => String(id);
  const dispatch = useDispatch();
  const { books, booksLoading } = useSelector((state: AppState) => state.book);
  const renderBook: ListRenderItem<Book> = ({ item, index }) => (
    <BookCard customStyle={index !== books!?.length - 1 && styles.bookListItem} {...item} />
  );
  useEffect(() => {
    dispatch(bookActions.getBooks());
  }, [dispatch]);

  return (
    <LoadableFlatlist
      loading={booksLoading}
      data={books}
      renderItem={renderBook}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.bookListInside}
      style={styles.bookList}
    />
  );
}
export default BookListContainer;
