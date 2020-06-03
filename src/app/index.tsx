import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import store from '@redux/store';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from '@components/AppNavigator';

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
