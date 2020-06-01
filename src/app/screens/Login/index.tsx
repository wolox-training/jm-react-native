import React from 'react';
import { ImageBackground, Image, TextInput } from 'react-native';
import loginBackground from '@assets/bc_inicio.png';
import appLogo from '@assets/wbooks_logo.png';
import Button from '@components/Button';

import styles from './styles';

function Login() {
  return (
    <ImageBackground source={loginBackground} style={styles.loginBackground}>
      <Image source={appLogo} style={styles.logo} />
      <TextInput placeholder="Email (john.doe@email.com)" />
      <TextInput placeholder="Password (* * * * * * * *)" />
      <Button>Sign in</Button>
    </ImageBackground>
  );
}

export default Login;
