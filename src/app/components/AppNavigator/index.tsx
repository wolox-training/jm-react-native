import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '@constants/routes';
import { tabNavigatorConfig, stackNavigatorConfig } from '@config/navigation';
import { RootTabParamList, RootStackParamList } from '@interfaces/navigation';
import BookList from '@app/screens/BookList';
import BookDetail from '@app/screens/BookDetail';
import Wishlist from '@components/Wishlist';
import TabBarIcon from '@components/TabBarIcon';

const stackNavigator = createStackNavigator<RootStackParamList>();
const tabNavigator = createBottomTabNavigator<RootTabParamList>();

function LibraryStackScreen() {
  return (
    <stackNavigator.Navigator initialRouteName={Routes.BookList} screenOptions={stackNavigatorConfig}>
      <stackNavigator.Screen name={Routes.BookList} component={BookList} options={{ title: 'LIBRARY' }} />
      <stackNavigator.Screen
        name={Routes.BookDetail}
        component={BookDetail}
        options={{ title: 'BOOK DETAIL' }}
      />
    </stackNavigator.Navigator>
  );
}

function TabNavigatorScreen() {
  return (
    <tabNavigator.Navigator
      initialRouteName={Routes.Library}
      screenOptions={{ tabBarIcon: TabBarIcon }}
      tabBarOptions={tabNavigatorConfig}>
      <tabNavigator.Screen name={Routes.Library} component={LibraryStackScreen} />
      <tabNavigator.Screen name={Routes.Wishlist} component={Wishlist} />
    </tabNavigator.Navigator>
  );
}

export default TabNavigatorScreen;
