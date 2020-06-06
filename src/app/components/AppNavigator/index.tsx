import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import TabBarIcon from '@components/TabBarIcon';
import Wishlist from '@components/Wishlist';
import { tabNavigatorConfig, stackNavigatorConfig } from '@config/navigation';
import Routes from '@constants/routes';
import STORAGE from '@constants/storage';
import { useAsyncStorage } from '@hooks/asyncStorage';
import {
  LibraryNavigatorParams,
  DashboardNavigatorParams,
  AuthNavigatorParams
} from '@interfaces/navigation';
import BookDetail from '@screens/BookDetail';
import BookList from '@screens/BookList';
import Login from '@screens/Login';

const LibraryNavigator = createStackNavigator<LibraryNavigatorParams>();
const TabNavigator = createBottomTabNavigator<DashboardNavigatorParams>();
const AuthNavigator = createStackNavigator<AuthNavigatorParams>();

function LibraryStackScreen() {
  return (
    <LibraryNavigator.Navigator initialRouteName={Routes.BookList} screenOptions={stackNavigatorConfig}>
      <LibraryNavigator.Screen name={Routes.BookList} component={BookList} options={{ title: 'LIBRARY' }} />
      <LibraryNavigator.Screen
        name={Routes.BookDetail}
        component={BookDetail}
        options={{ title: 'BOOK DETAIL' }}
      />
    </LibraryNavigator.Navigator>
  );
}

function DashboardNavigatorScreen() {
  return (
    <TabNavigator.Navigator
      initialRouteName={Routes.Library}
      screenOptions={{ tabBarIcon: TabBarIcon }}
      tabBarOptions={tabNavigatorConfig}>
      <TabNavigator.Screen name={Routes.Library} component={LibraryStackScreen} />
      <TabNavigator.Screen name={Routes.Wishlist} component={Wishlist} />
    </TabNavigator.Navigator>
  );
}

function AuthNavigatorScreen() {
  const userIsLogged = useAsyncStorage(STORAGE.accessToken, false);
  return (
    <AuthNavigator.Navigator headerMode="none">
      {userIsLogged ? (
        <AuthNavigator.Screen name={Routes.Dashboard} component={DashboardNavigatorScreen} />
      ) : (
        <AuthNavigator.Screen name={Routes.Login} component={Login} />
      )}
    </AuthNavigator.Navigator>
  );
}

export default AuthNavigatorScreen;
