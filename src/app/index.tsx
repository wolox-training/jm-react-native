import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import AppNavigator from '@components/AppNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
