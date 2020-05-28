import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '@interfaces/navigation';
import Routes from '@constants/routes';
import { stackNavigatorConfig } from '@config/navigation';

import BookDetail from './screens/BookDetail';
import BookList from './screens/BookList';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={Routes.Library} screenOptions={stackNavigatorConfig}>
        <Screen name={Routes.Library} component={BookList} options={{ title: 'LIBRARY' }} />
        <Screen name={Routes.BookDetail} component={BookDetail} options={{ title: 'BOOK DETAIL' }} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
