import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '@constants/routes';
import { tabNavigatorConfig } from '@config/navigation';
import { RootTabParamList } from '@interfaces/navigation';

import LibraryNavigator from './components/LibraryNavigator';
import Wishlist from './components/Wishlist';
import TabBarIcon from './components/TabBarIcon';

const { Navigator, Screen } = createBottomTabNavigator<RootTabParamList>();

function App() {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName={Routes.Library}
        screenOptions={{ tabBarIcon: TabBarIcon }}
        tabBarOptions={tabNavigatorConfig}>
        <Screen name={Routes.Library} component={LibraryNavigator} />
        <Screen name={Routes.Wishlist} component={Wishlist} />
      </Navigator>
    </NavigationContainer>
  );
}

export default App;
