import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';

import bookPlaceholderCover from '@assets/book_placeholder_cover.png';
import Routes from '@constants/routes';
import { Book } from '@interfaces/book';

import styles from './styles';

interface Props extends Book {}

function BookCard({ ...book }: Props) {
  const { title, author, image } = book;
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate(Routes.BookDetail, { book });
  return (
    <TouchableOpacity style={styles.book} onPress={handlePress}>
      <Image source={image ? { uri: image.url } : bookPlaceholderCover} style={styles.bookCover} />
      <View style={styles.bookSummary}>
        <Text numberOfLines={2} style={styles.bookTitle}>
          {title.trim()}
        </Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookCard;
