import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState, useEffect } from 'react';
import { Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import TabBarIcon from '@components/TabBarIcon';
import Wishlist from '@components/Wishlist';
import {
  tabNavigatorConfig,
  stackNavigatorConfig,
  libraryScreenConfig,
  searchScreenConfig
} from '@config/navigation';
import Routes from '@constants/routes';
import STORAGE from '@constants/storage';
import { AppState } from '@interfaces/appState';
import {
  LibraryNavigatorParams,
  DashboardNavigatorParams,
  AuthNavigatorParams
} from '@interfaces/navigation';
import authActions from '@redux/auth/actions';
import BookDetail from '@screens/BookDetail';
import FreeScreen from '@screens/FreeScreen';
import Library from '@screens/Library';
import Login from '@screens/Login';
import Search from '@screens/Search';
import AuthLocalService from '@services/AuthLocalService';

const LibraryNavigator = createStackNavigator<LibraryNavigatorParams>();
const TabNavigator = createBottomTabNavigator<DashboardNavigatorParams>();
const AuthNavigator = createStackNavigator<AuthNavigatorParams>();

function LibraryStackScreen() {
  return (
    <LibraryNavigator.Navigator initialRouteName={Routes.BookList} screenOptions={stackNavigatorConfig}>
      <LibraryNavigator.Screen name={Routes.BookList} component={Library} options={libraryScreenConfig} />
      <LibraryNavigator.Screen
        name={Routes.BookDetail}
        component={BookDetail}
        options={{ title: 'BOOK DETAIL' }}
      />
      <LibraryNavigator.Screen name={Routes.Search} component={Search} options={searchScreenConfig} />
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
      <TabNavigator.Screen name={Routes.Free} component={FreeScreen} />
    </TabNavigator.Navigator>
  );
}

function AuthNavigatorScreen() {
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const currentUser = useSelector((state: AppState) => state.auth.user);

  useEffect(() => {
    AuthLocalService.getAuth().then(auth => {
      const { [STORAGE.user]: user, [STORAGE.authHeaders]: authHeaders } = auth;
      if (user && authHeaders) {
        dispatch(authActions.rehydrateAuth(user, authHeaders));
      }
      setLoaded(true);
    });
  }, [dispatch]);

  return loaded ? (
    <AuthNavigator.Navigator headerMode="none">
      {currentUser ? (
        <AuthNavigator.Screen name={Routes.Dashboard} component={DashboardNavigatorScreen} />
      ) : (
        <AuthNavigator.Screen name={Routes.Login} component={Login} />
      )}
    </AuthNavigator.Navigator>
  ) : (
    <Text>Loading...</Text>
  );
}

export default AuthNavigatorScreen;
