import React from 'react';
import { ImageBackground, Image, TextInput } from 'react-native';
import loginBackground from '@assets/bc_inicio.png';
import appLogo from '@assets/wbooks_logo.png';
import Button from '@components/Button';
import { FIELD } from '@constants/styleHelpers';

import styles from './styles';

function Login() {
  return (
    <ImageBackground source={loginBackground} style={styles.loginBackground}>
      <Image source={appLogo} style={styles.logo} />
      <TextInput
        placeholder="Username"
        autoCapitalize="none"
        textContentType="username"
        style={styles.emailField}
      />
      <TextInput
        autoCompleteType="password"
        placeholder="Password"
        secureTextEntry={true}
        textContentType="password"
        style={FIELD}
      />
      <Button buttonStyle={styles.loginButton} buttonTextStyle={styles.loginButtonText}>
        Sign in
      </Button>
    </ImageBackground>
  );
}

export default Login;
