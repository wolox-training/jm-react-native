import React from 'react';
import { View, Image, Text } from 'react-native';

import searchIcon from '@assets/ic_search_placeholder.png';

import styles from './styles';

function SearchEmptyFallback() {
  return (
    <View style={styles.fallback}>
      <Image style={styles.fallbackIcon} source={searchIcon} />
      <Text style={styles.fallbackTitle}>Search in WBooks</Text>
      <Text style={styles.fallbackMessage}>Find your favorite writers and books!</Text>
    </View>
  );
}

export default SearchEmptyFallback;
