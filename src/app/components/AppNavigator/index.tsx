import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';

import LogoutButton from '@components/LogoutButton';
import TabBarIcon from '@components/TabBarIcon';
import Wishlist from '@components/Wishlist';
import { tabNavigatorConfig, stackNavigatorConfig } from '@config/navigation';
import Routes from '@constants/routes';
import { AppState } from '@interfaces/appState';
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
      <LibraryNavigator.Screen
        name={Routes.BookList}
        component={BookList}
        options={{
          title: 'LIBRARY',
          headerLeft: () => <LogoutButton />,
          headerLeftContainerStyle: { paddingLeft: 12 }
        }}
      />
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
  const currentUser = useSelector((state: AppState) => state.auth.user);
  return (
    <AuthNavigator.Navigator headerMode="none">
      {currentUser ? (
        <AuthNavigator.Screen name={Routes.Dashboard} component={DashboardNavigatorScreen} />
      ) : (
        <AuthNavigator.Screen name={Routes.Login} component={Login} />
      )}
    </AuthNavigator.Navigator>
  );
}

export default AuthNavigatorScreen;
