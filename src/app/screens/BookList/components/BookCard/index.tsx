import React from 'react';

import { Text, View, Image, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import bookPlaceholderCover from '@assets/book_placeholder_cover.png';
import Routes from '@constants/routes';
import { Book } from '@interfaces/book';

interface Props extends Book {}

function BookCard({ ...book }: Props) {
  const { title, author, imageUrl } = book;
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate(Routes.BookDetail, { book });
  return (
    <TouchableOpacity style={styles.book} onPress={handlePress}>
      <Image source={imageUrl ? { uri: imageUrl } : bookPlaceholderCover} style={styles.bookCover} />
      <View style={styles.bookSummary}>
        <Text numberOfLines={2} style={styles.bookTitle}>
          {title}
        </Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookCard;
