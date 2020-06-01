import React from 'react';
import { ImageBackground, Image, TouchableOpacity, Text } from 'react-native';
import loginBackground from '@assets/bc_inicio.png';
import appLogo from '@assets/wbooks_logo.png';
import { TextInput } from 'react-native-gesture-handler';

import styles from './styles';

function Login() {
  return (
    <ImageBackground source={loginBackground} style={styles.loginBackground}>
      <Image source={appLogo} style={styles.logo} />
      <TextInput placeholder="Email (john.doe@email.com)" />
      <TextInput placeholder="Password (* * * * * * * *)" />
      <TouchableOpacity>
        <Text>Sign in</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

export default Login;
