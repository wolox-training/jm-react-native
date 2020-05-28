import 'react-native-gesture-handler';
import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParamList } from '@interfaces/navigation';
import Routes from '@constants/routes';
import goBackIcon from '@assets/ic_back.png';
import headerBackground from '@assets/bc_navbar.png';

import BookDetail from './screens/BookDetail';
import BookList from './screens/BookList';
import styles from './styles';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

function App() {
  const stackNavigatorConfig = {
    headerTitleStyle: styles.headerTitle,
    headerStyle: styles.header,
    headerBackTitleVisible: false,
    headerBackground: () => <Image source={headerBackground} style={styles.headerBackground} />,
    headerBackImage: () => <Image source={goBackIcon} style={styles.goBackButton} />
  };
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
