import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '@interfaces/navigation';
import Routes from '@constants/routes';
import bookPlaceholderCover from '@assets/book_placeholder_cover.png';

import CommentList from './components/CommentList';
import styles from './styles';

interface Props {
  route: RouteProp<RootStackParamList, Routes.BookDetail>;
}

function BookDetail({ route }: Props) {
  const { imageUrl, title, author, year, genre } = route.params.book;
  return (
    <View style={styles.bookDetail}>
      <View style={styles.bookDetailInside}>
        <View style={styles.bookInfo}>
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
          <TouchableOpacity style={styles.watchlistButton}>
            <Text style={styles.watchlistButtonText}>ADD TO WATCHLIST</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rentButton}>
            <Text style={styles.rentButtonText}>RENT</Text>
          </TouchableOpacity>
        </View>
      </View>
      <CommentList />
    </View>
  );
}

export default BookDetail;
