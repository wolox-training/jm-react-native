import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@interfaces/navigation';
import Routes from '@constants/routes';
import { BOOKS } from '@constants/mockData';

import styles from './styles';

interface Props {
  route: RouteProp<RootStackParamList, Routes.BookDetail>;
}

function BookDetail({ route }: Props) {
  const selectedBook = BOOKS.find(({ id }) => id === route.params.bookId);
  const { imageUrl, title, author, year, genre } = selectedBook!;

  return (
    <View style={styles.bookDetail}>
      <View style={styles.bookDetailInside}>
        <View style={styles.bookInfo}>
          <Image
            source={imageUrl ? { uri: imageUrl } : require('@assets/book_placeholder_cover.png')}
            style={styles.bookCover}
          />
          <View style={styles.bookSummary}>
            <Text style={styles.bookTitle}>{title}</Text>
            <Text style={styles.bookStatus}>Not Available</Text>
            <Text style={styles.bookBasicAttribute}>{author}</Text>
            <Text style={styles.bookBasicAttribute}>{year}</Text>
            <Text style={styles.bookBasicAttribute}>{genre}</Text>
          </View>
        </View>
        <View style={styles.bookDetailActions}>
          <TouchableOpacity style={styles.watchlistButton}>
            <Text style={styles.watchlistButtonText}>ADD TO WATCHLIST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.rentButtonText}>RENT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default BookDetail;
