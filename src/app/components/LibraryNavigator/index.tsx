import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from '@constants/routes';
import BookList from '@app/screens/BookList';
import BookDetail from '@app/screens/BookDetail';
import { RootStackParamList } from '@interfaces/navigation';
import { stackNavigatorConfig } from '@config/navigation';

function LibraryNavigator() {
  const { Navigator, Screen } = createStackNavigator<RootStackParamList>();
  return (
    <Navigator initialRouteName={Routes.BookList} screenOptions={stackNavigatorConfig}>
      <Screen name={Routes.BookList} component={BookList} options={{ title: 'LIBRARY' }} />
      <Screen name={Routes.BookDetail} component={BookDetail} options={{ title: 'BOOK DETAIL' }} />
    </Navigator>
  );
}

export default LibraryNavigator;
