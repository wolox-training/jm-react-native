import React from 'react';

import Searchbar from '@app/components/Searchbar';
import SearchButton from '@app/components/SearchButton';
import BackButton from '@components/BackButton';
import HeaderBackground from '@components/HeaderBackground';
import LogoutButton from '@components/LogoutButton';
import { white, blue, gray2 } from '@constants/colors';

export const stackNavigatorConfig = {
  headerTitleStyle: {
    fontSize: 16,
    color: white,
    fontWeight: '600',
    letterSpacing: -0.4
  },
  headerStyle: { height: 100 },
  headerBackTitleVisible: false,
  headerBackground: HeaderBackground,
  headerBackImage: BackButton
};

export const tabNavigatorConfig = {
  labelStyle: {
    fontSize: 10,
    lineHeight: 12,
    letterSpacing: 0.15
  },
  activeTintColor: blue,
  inactiveTintColor: gray2
};

export const libraryScreenConfig = {
  title: 'LIBRARY',
  headerLeft: () => <LogoutButton />,
  headerLeftContainerStyle: { paddingLeft: 12 },
  headerRight: () => <SearchButton />,
  headerRightContainerStyle: { paddingRight: 12 }
};

export const searchScreenConfig = {
  headerLeft: () => null,
  headerTitle: () => <Searchbar />,
  headerTitleStyle: {
    width: '100%'
  }
};
