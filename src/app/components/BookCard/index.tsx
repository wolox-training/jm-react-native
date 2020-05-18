import React from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  author: string;
  coverImageURI: string;
}

function BookCard({ title, author, coverImageURI }: Props) {
  return (
    <View style={styles.book}>
      <Image source={{ uri: coverImageURI }} style={styles.bookCover} />
      <View>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </View>
  );
}

export default BookCard;
