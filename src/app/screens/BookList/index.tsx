import React from 'react';
import { View } from 'react-native';
import BookCard from '@app/components/BookCard';

import styles from './styles';

function BookList() {
  return (
    <View style={styles.bookList}>
      <BookCard
        title="Scavenger Hunt"
        author="Christopher Pike"
        coverImageURI="http://wolox-training.s3.amazonaws.com/uploads/6963511-M.jpg"
      />
    </View>
  );
}

export default BookList;
