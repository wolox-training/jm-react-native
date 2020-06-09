import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';

import { BOOKS } from '@constants/mockData';
import { Book } from '@interfaces/book';
import BookService from '@services/BookService';

import BookCard from './components/BookCard';
import styles from './styles';

function BookList() {
  const keyExtractor = ({ id }: Book) => String(id);
  const renderBook: ListRenderItem<Book> = ({ item }) => <BookCard {...item} />;
  BookService.getBookDetail(1);
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
