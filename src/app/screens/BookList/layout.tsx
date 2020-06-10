import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import withLoading from '@components/WithLoading';
import { Book } from '@interfaces/book';

import BookCard from './components/BookCard';
import styles from './styles';

interface Props {
  books: Book[] | null;
}

function BookList({ books }: Props) {
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCard {...item} />;
  return (
    <FlatList<Book>
      data={books}
      renderItem={renderBook}
      keyExtractor={keyExtractor}
      style={styles.bookList}
    />
  );
}

export default withLoading(BookList);
