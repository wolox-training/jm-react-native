import { useRoute, RouteProp } from '@react-navigation/native';
import React, { useRef, useState } from 'react';
import { Text, View, Image, Animated, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import bookPlaceholderCover from '@assets/book_placeholder_cover.png';
import rentedIcond from '@assets/ic_check.png';
import Button from '@components/Button';
import { green, transparent, blueAndGreenGrandient } from '@constants/colors';
import Routes from '@constants/routes';
import { LibraryNavigatorParams } from '@interfaces/navigation';

import styles, { RENT_BORDER_RADIUS, BUTTON_HEIGHT, BUTTON_WIDTH } from './styles';

type BookDetailScreenRoute = RouteProp<LibraryNavigatorParams, Routes.BookDetail>;

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity);

function BookInfo() {
  const route = useRoute<BookDetailScreenRoute>();
  const { image, title, author, year, genre } = route.params.book;
  const [bookRented, setBookRented] = useState(false);

  const rentBtnWidth = useRef(new Animated.Value(BUTTON_WIDTH)).current;
  const rentBtnBackground = useRef(new Animated.Value(0)).current;
  const rentBtnBorderRadius = useRef(new Animated.Value(RENT_BORDER_RADIUS)).current;

  const handleRent = () => {
    Animated.parallel([
      Animated.timing(rentBtnBackground, {
        toValue: 1,
        duration: 250,
        useNativeDriver: false
      }),
      Animated.timing(rentBtnBorderRadius, {
        toValue: BUTTON_HEIGHT / 2,
        duration: 1000,
        useNativeDriver: false
      }),
      Animated.spring(rentBtnWidth, {
        toValue: BUTTON_HEIGHT,
        speed: 10,
        bounciness: 5,
        useNativeDriver: false
      })
    ]).start();

    setBookRented(true);
  };

  const rentButtonAnimatedStyle = {
    backgroundColor: rentBtnBackground.interpolate({
      inputRange: [0, 1],
      outputRange: [transparent, green]
    }),
    borderRadius: rentBtnBorderRadius,
    width: rentBtnWidth
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
        <LinearGradient
          style={styles.rentButtonWrapper}
          start={{ x: 0, y: 0 }}
          colors={blueAndGreenGrandient}>
          <AnimatedTouchableOpacity
            activeOpacity={1}
            style={[styles.rentButton, rentButtonAnimatedStyle]}
            onPress={handleRent}>
            {bookRented ? (
              <Image style={styles.rentedIcond} source={rentedIcond} />
            ) : (
              <Text style={styles.rentButtonText}>RENT</Text>
            )}
          </AnimatedTouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
}

export default BookInfo;
