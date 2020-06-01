import React, { useState } from 'react';
import { ImageBackground, Image, TextInput } from 'react-native';
import loginBackground from '@assets/bc_inicio.png';
import appLogo from '@assets/wbooks_logo.png';
import Button from '@components/Button';
import { FIELD } from '@constants/styleHelpers';
import { isEmail, isPresent } from '@constants/validations';
import { useAuthContext } from '@constants/auth';

import styles from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUserIsAuth } = useAuthContext();
  const formIsValid = isEmail(email) && isPresent(password);
  const signIn = () => setUserIsAuth(true);

  return (
    <ImageBackground source={loginBackground} style={styles.loginBackground}>
      <Image source={appLogo} style={styles.logo} />
      <TextInput
        style={styles.emailField}
        placeholder="Email"
        autoCapitalize="none"
        textContentType="emailAddress"
        keyboardType="email-address"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={FIELD}
        autoCompleteType="password"
        placeholder="Password"
        secureTextEntry={true}
        textContentType="password"
        onChangeText={setPassword}
        value={password}
      />
      <Button
        buttonStyle={styles.loginButton}
        buttonTextStyle={styles.loginButtonText}
        onPress={signIn}
        disabled={!formIsValid}>
        Sign in
      </Button>
    </ImageBackground>
  );
}

export default Login;
