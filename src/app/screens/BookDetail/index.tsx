import React from 'react';
import { ScrollView } from 'react-native';

import CommentList from './components/CommentList';
import BookInfo from './components/BookInfo';
import styles from './styles';

function BookDetail() {
  return (
    <ScrollView style={styles.bookDetail} contentContainerStyle={styles.bookDetailInside}>
      <BookInfo />
      <CommentList />
    </ScrollView>
  );
}

export default BookDetail;
