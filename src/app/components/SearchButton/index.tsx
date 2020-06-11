import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image } from 'react-native';

import searchIcon from '@assets/ic_search.png';
import Button from '@components/Button';
import Routes from '@constants/routes';
import { SQUARE_NARROW } from '@constants/styleHelpers';

function SearchButton() {
  const navigation = useNavigation();
  const handlePress = () => navigation.navigate(Routes.Search);
  return (
    <Button onPress={handlePress}>
      <Image style={SQUARE_NARROW} source={searchIcon} />
    </Button>
  );
}

export default SearchButton;
