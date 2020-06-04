import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ImageBackground, Image, TextInput } from 'react-native';
import loginBackground from '@assets/bc_inicio.png';
import appLogo from '@assets/wbooks_logo.png';
import Button from '@components/Button';
import { FIELD } from '@constants/styleHelpers';
import { isEmail, isPresent } from '@constants/validations';
import { AppState } from '@interfaces/appState';
import authActions from '@redux/auth/actions';

import styles from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const userIsLoading = useSelector((state: AppState) => state.auth.userLoading);

  const formIsValid = isEmail(email) && isPresent(password);
  const submitDisabled = !formIsValid || userIsLoading;
  const signIn = () => dispatch(authActions.logIn({ email, password }));

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
        buttonStyle={{ ...styles.loginButton, ...(submitDisabled && styles.loginButtonDisabled) }}
        buttonTextStyle={styles.loginButtonText}
        onPress={signIn}
        disabled={submitDisabled}>
        {userIsLoading ? 'Loading...' : 'Sign in'}
      </Button>
    </ImageBackground>
  );
}

export default Login;
