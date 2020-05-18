import React from 'react';
import { SafeAreaView } from 'react-native';

import BookList from './screens/BookList';
import styles from './styles';

const App = () => {
  return (
    <SafeAreaView style={styles.app}>
      <BookList />
    </SafeAreaView>
  );
};

export default App;
