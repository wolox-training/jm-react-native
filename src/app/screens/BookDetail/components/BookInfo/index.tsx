import React from 'react';
import { Text, View, Image } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { LibraryNavigatorParams } from '@interfaces/navigation';
import Routes from '@constants/routes';
import bookPlaceholderCover from '@assets/book_placeholder_cover.png';
import Button from '@components/Button';

import styles from './styles';

type BookDetailScreenRouteProp = RouteProp<LibraryNavigatorParams, Routes.BookDetail>;

function BookInfo() {
  const route = useRoute<BookDetailScreenRouteProp>();
  const { imageUrl, title, author, year, genre } = route.params.book;
  return (
    <View style={styles.bookInfo}>
      <View style={styles.bookInfoInside}>
        <Image source={imageUrl ? { uri: imageUrl } : bookPlaceholderCover} style={styles.bookCover} />
        <View style={styles.bookSummary}>
          <Text numberOfLines={2} style={styles.bookTitle}>
            {title}
          </Text>
          <Text style={styles.bookStatus}>Not Available</Text>
          <Text style={styles.bookBasicAttribute}>{author}</Text>
          <Text style={styles.bookBasicAttribute}>{year}</Text>
          <Text style={styles.bookBasicAttribute}>{genre}</Text>
        </View>
      </View>
      <View style={styles.bookDetailActions}>
        <Button buttonStyle={styles.watchlistButton} buttonTextStyle={styles.watchlistButtonText}>
          ADD TO WATCHLIST
        </Button>
        <Button buttonStyle={styles.rentButton} buttonTextStyle={styles.rentButtonText}>
          ADD TO WATCHLIST
        </Button>
      </View>
    </View>
  );
}

export default BookInfo;
