import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '@interfaces/navigation';
import Routes from '@constants/routes';

import BookList from './screens/BookList';
import BookDetail from './screens/BookDetail';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Navigator initialRouteName={Routes.Library}>
        <Screen name={Routes.Library} component={BookList} />
        <Screen name={Routes.BookDetail} component={BookDetail} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
