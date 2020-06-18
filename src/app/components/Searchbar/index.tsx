import React from 'react';
import { View, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector, useDispatch } from 'react-redux';

import removeIcon from '@assets/ic_remove.png';
import searchPlaceholderIcon from '@assets/ic_search_placeholder.png';
import { AppState } from '@interfaces/appState';
import bookActions from '@redux/books/actions';

import styles from './styles';

function Searchbar() {
  const dispatch = useDispatch();
  const query = useSelector((state: AppState) => state.book.querySearch);
  const setQuery = (textInput: string) => dispatch(bookActions.setQuerySearch(textInput));
  const clearInputText = () => setQuery('');

  return (
    <View style={styles.searchbar}>
      <Image style={styles.searchbarLeftIcon} source={searchPlaceholderIcon} />
      <TextInput
        style={styles.searchbarInput}
        placeholder="What are you looking for?"
        onChangeText={setQuery}
        value={query}
      />
      <TouchableOpacity onPress={clearInputText}>
        <Image style={styles.clearTextIcon} source={removeIcon} />
      </TouchableOpacity>
    </View>
  );
}

export default Searchbar;
