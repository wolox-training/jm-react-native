import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import searchIcon from '@assets/ic_search.png';
import Routes from '@constants/routes';
import { SQUARE_NARROW } from '@constants/styleHelpers';

function SearchButton() {
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate(Routes.Search);
  return (
    <TouchableOpacity onPress={handlePress}>
      <Image style={SQUARE_NARROW} source={searchIcon} />
    </TouchableOpacity>
  );
}

export default SearchButton;
