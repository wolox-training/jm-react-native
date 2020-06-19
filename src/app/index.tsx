import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StatusBar } from 'react-native';

import AppNavigator from '@components/AppNavigator';
import { blackTransparent70 } from '@constants/colors';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={blackTransparent70} translucent={true} />
      <AppNavigator />
    </NavigationContainer>
  );
};

export default App;
