import React from 'react';
import { FlatList } from 'react-native';
import BookCard from '@components/book-card';
import { BOOKS } from '@constants/mockData';

import styles from './styles';

function BookList() {
  return (
    <FlatList
      data={BOOKS}
      renderItem={({ title, author, imageURL }) => (
        <BookCard title={title} author={author} coverImageURI={imageURL} />
      )}
      keyExtractor={({ id }) => String(id)}
      style={styles.bookList}
    />
  );
}

export default BookList;
