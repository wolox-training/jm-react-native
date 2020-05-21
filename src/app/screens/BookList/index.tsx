import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import BookCard from '@components/BookCard';
import { BOOKS } from '@constants/mockData';
import { Book } from '@interfaces/book';

import styles from './styles';

function BookList() {
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCard {...item} />;
  return (
    <FlatList<Book>
      data={BOOKS}
      renderItem={renderBook}
      keyExtractor={keyExtractor}
      style={styles.bookList}
    />
  );
}

export default BookList;
