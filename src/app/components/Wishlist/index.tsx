import React from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';

function Wishlist() {
  return (
    <SafeAreaView style={styles.wishlist}>
      <Text style={styles.wishlistMessageDecoration}>🦄</Text>
      <Text style={styles.wishlistMessage}>We're working on this page</Text>
    </SafeAreaView>
  );
}

export default Wishlist;
