import React, { FC } from 'react';
import { ListRenderItem, FlatList, FlatListProps } from 'react-native';
import { useSelector } from 'react-redux';

import withLoading from '@components/WithLoading';
import { AppState } from '@interfaces/appState';
import { Book } from '@interfaces/book';

import BookCard from './components/BookCard';
import styles from './styles';

interface Props {
  books: Book[];
  emptyComponent?: FC;
}

function BookList({ books, EmptyComponent }: Props) {
  const booksLoading = useSelector((state: AppState) => state.book.booksLoading);
  const LoadableFlatlist = withLoading(FlatList) as FC<FlatListProps<Book> & { loading: boolean }>;
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item, index }) => (
    <BookCard customStyle={index !== books!?.length - 1 && styles.bookListItem} {...item} />
  );

  return (
    <LoadableFlatlist
      loading={booksLoading}
      data={books}
      renderItem={renderBook}
      keyExtractor={keyExtractor}
      contentContainerStyle={styles.bookListInside}
      ListEmptyComponent={emptyComponent}
      style={styles.bookList}
    />
  );
}
export default BookList;
