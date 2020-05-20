import React from 'react';
import { Text, View, Image } from 'react-native';
import { Book } from '@interfaces/book';

import styles from './styles';

interface Props {
  bookData: Book;
}

function BookCard({ bookData: { title, author, imageUrl } }: Props) {
  return (
    <View style={styles.book}>
      <Image
        source={imageUrl ? { uri: imageUrl } : require('@assets/book_placeholder_cover.png')}
        style={styles.bookCover}
      />
      <View>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </View>
  );
}

export default BookCard;
