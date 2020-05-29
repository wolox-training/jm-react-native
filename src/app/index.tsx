import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@components/AppNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
