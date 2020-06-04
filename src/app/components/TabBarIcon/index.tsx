import React from 'react';

import { Image } from 'react-native';

import { useRoute } from '@react-navigation/native';

import { TabNavigatorIcons } from '@constants/routes';
import { SQUARE_NARROW } from '@constants/styleHelpers';

interface Props {
  focused: boolean;
}

function TabBarIcon({ focused }: Props) {
  const route = useRoute();
  return (
    <Image source={TabNavigatorIcons[route.name][focused ? 'active' : 'inactive']} style={SQUARE_NARROW} />
  );
}

export default TabBarIcon;
