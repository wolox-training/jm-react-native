import React from 'react';

import { Text, View } from 'react-native';

import styles from './styles';

function Wishlist() {
  return (
    <View style={styles.wishlist}>
      <Text style={styles.wishlistMessageDecoration}>🦄</Text>
      <Text style={styles.wishlistMessage}>We're working on this page</Text>
    </View>
  );
}

export default Wishlist;
