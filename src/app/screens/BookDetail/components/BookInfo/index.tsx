import { useRoute, RouteProp } from '@react-navigation/native';
import React, { useRef } from 'react';
import { Text, View, Image, Animated, TouchableOpacity } from 'react-native';

import bookPlaceholderCover from '@assets/book_placeholder_cover.png';
import Button from '@components/Button';
import { lightGray, green } from '@constants/colors';
import Routes from '@constants/routes';
import { LibraryNavigatorParams } from '@interfaces/navigation';

import styles from './styles';

type BookDetailScreenRoute = RouteProp<LibraryNavigatorParams, Routes.BookDetail>;

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

function BookInfo() {
  const route = useRoute<BookDetailScreenRoute>();
  const { image, title, author, year, genre } = route.params.book;
  const animationValue = useRef(new Animated.Value(0)).current;
  const rentBackgroundColor = animationValue.interpolate({
    inputRange: [0, 1],
    outputRange: [lightGray, green]
  });

  const handleRent = () => {
    Animated.timing(animationValue, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false
    }).start();
  };

  return (
    <View style={styles.bookInfo}>
      <View style={styles.bookInfoInside}>
        <Image source={image ? { uri: image.url } : bookPlaceholderCover} style={styles.bookCover} />
        <View style={styles.bookSummary}>
          <Text numberOfLines={2} style={styles.bookTitle}>
            {title.trim()}
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
        <AnimatedTouchableOpacity
          style={[styles.rentButton, { backgroundColor: rentBackgroundColor }]}
          onPress={handleRent}>
          <Text style={styles.rentButtonText}>RENT</Text>
        </AnimatedTouchableOpacity>
      </View>
    </View>
  );
}

export default BookInfo;
