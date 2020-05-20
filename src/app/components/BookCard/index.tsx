import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Book } from '@interfaces/book';
import bookPlaceholderCover from '@assets/book_placeholder_cover.png';
import { RootStackParamList } from '@interfaces/navigation';
import Routes from '@constants/routes';

import styles from './styles';

interface Props extends Book {}

function BookCard({ id, title, author, imageUrl }: Props) {
  const navigation: StackNavigationProp<RootStackParamList, Routes.Library> = useNavigation();
  return (
    <TouchableOpacity style={styles.book} onPress={() => navigation.push(Routes.BookDetail, { bookId: id })}>
      <Image source={imageUrl ? { uri: imageUrl } : bookPlaceholderCover} style={styles.bookCover} />
      <View>
        <Text style={styles.bookTitle}>{title}</Text>
        <Text style={styles.bookAuthor}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookCard;
