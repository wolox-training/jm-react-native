import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import BookCard from '@components/BookCard';
import { BOOKS } from '@constants/mockData';
import { Book } from '@interfaces/book';

import styles from './styles';

const renderBook: ListRenderItem<Book> = ({ item: { title, author, imageURL } }) => (
  <BookCard title={title} author={author} coverImageURI={imageURL} />
);

function BookList() {
  return (
    <FlatList
      data={BOOKS}
      renderItem={renderBook}
      keyExtractor={({ id }) => String(id)}
      style={styles.bookList}
    />
  );
}

export default BookList;
