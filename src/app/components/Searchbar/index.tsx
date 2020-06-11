import React from 'react';
import { View, Image, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import searchPlaceholderIcon from '@assets/ic_search_placeholder.png';
import { AppState } from '@interfaces/appState';
import bookActions from '@redux/books/actions';

import styles from './styles';

function Searchbar() {
  const dispatch = useDispatch();
  const input = useSelector((state: AppState) => state.book.querySearch);
  const setInput = (textInput: string) => dispatch(bookActions.setValue('querySearch', textInput));

  return (
    <View style={styles.searchbar}>
      <Image style={styles.searchbarLeftIcon} source={searchPlaceholderIcon} />
      <TextInput
        style={styles.searchbarInput}
        placeholder="What are you looking for?"
        onChangeText={setInput}
        value={input}
        clearButtonMode="while-editing"
      />
    </View>
  );
}

export default Searchbar;
