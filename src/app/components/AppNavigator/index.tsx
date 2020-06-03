import React from 'react';
import { useSelector } from 'react-redux';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '@constants/routes';
import { tabNavigatorConfig, stackNavigatorConfig } from '@config/navigation';
import {
  LibraryNavigatorParams,
  DashboardNavigatorParams,
  AuthNavigatorParams
} from '@interfaces/navigation';
import BookList from '@screens/BookList';
import BookDetail from '@screens/BookDetail';
import Wishlist from '@components/Wishlist';
import TabBarIcon from '@components/TabBarIcon';
import Login from '@screens/Login';
import { State } from '@interfaces/state';

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
  const { user } = useSelector((state: State) => state.auth);
  return (
    <AuthNavigator.Navigator headerMode="none">
      {user ? (
        <AuthNavigator.Screen name={Routes.Dashboard} component={DashboardNavigatorScreen} />
      ) : (
        <AuthNavigator.Screen name={Routes.Login} component={Login} />
      )}
    </AuthNavigator.Navigator>
  );
}

export default AuthNavigatorScreen;
