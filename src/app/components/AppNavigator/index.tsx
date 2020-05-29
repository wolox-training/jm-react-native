import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routes from '@constants/routes';
import { tabNavigatorConfig, stackNavigatorConfig } from '@config/navigation';
import { RootTabParamList, RootStackParamList } from '@interfaces/navigation';
import BookList from '@screens/BookList';
import BookDetail from '@screens/BookDetail';
import Wishlist from '@components/Wishlist';
import TabBarIcon from '@components/TabBarIcon';

const StackNavigator = createStackNavigator<RootStackParamList>();
const TabNavigator = createBottomTabNavigator<RootTabParamList>();

function LibraryStackScreen() {
  return (
    <StackNavigator.Navigator initialRouteName={Routes.BookList} screenOptions={stackNavigatorConfig}>
      <StackNavigator.Screen name={Routes.BookList} component={BookList} options={{ title: 'LIBRARY' }} />
      <StackNavigator.Screen
        name={Routes.BookDetail}
        component={BookDetail}
        options={{ title: 'BOOK DETAIL' }}
      />
    </StackNavigator.Navigator>
  );
}

function TabNavigatorScreen() {
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

export default TabNavigatorScreen;
