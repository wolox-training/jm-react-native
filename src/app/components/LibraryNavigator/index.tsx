import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import BookList from '@app/screens/BookList';
import BookDetail from '@app/screens/BookDetail';
import { RootStackParamList } from '@interfaces/navigation';
import { Image } from 'react-native';
import goBackIcon from '@assets/ic_back.png';
import headerBackground from '@assets/bc_navbar.png';

import styles from './styles';

function LibraryNavigator() {
  const stackNavigatorConfig = {
    headerTitleStyle: styles.headerTitle,
    headerStyle: styles.header,
    headerBackTitleVisible: false,
    headerBackground: () => <Image source={headerBackground} style={styles.headerBackground} />,
    headerBackImage: () => <Image source={goBackIcon} style={styles.goBackButton} />
  };
  const { Navigator, Screen } = createStackNavigator<RootStackParamList>();
  return (
    <Navigator initialRouteName={Routes.BookList} screenOptions={stackNavigatorConfig}>
      <Screen name={Routes.BookList} component={BookList} options={{ title: 'LIBRARY' }} />
      <Screen name={Routes.BookDetail} component={BookDetail} options={{ title: 'BOOK DETAIL' }} />
    </Navigator>
  );
}

export default LibraryNavigator;
