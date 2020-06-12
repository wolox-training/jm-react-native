import React, { useState } from 'react';
import { ImageBackground, Image, TextInput } from 'react-native';
import { useDispatch, connect } from 'react-redux';

import loginBackground from '@assets/bc_inicio.png';
import appLogo from '@assets/wbooks_logo.png';
import Button from '@components/Button';
import withLoading from '@components/WithLoading';
import { FIELD } from '@constants/styleHelpers';
import { isEmail, isPresent } from '@constants/validations';
import { AppState } from '@interfaces/appState';
import AuthService from '@services/AuthService';

import styles from './styles';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const formIsValid = isEmail(email) && isPresent(password);
  const signIn = () => dispatch(AuthService.logIn({ email, password }));

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
        buttonStyle={{ ...styles.loginButton, ...(!formIsValid && styles.loginButtonDisabled) }}
        buttonTextStyle={styles.loginButtonText}
        onPress={signIn}
        disabled={!formIsValid}>
        Sign in
      </Button>
    </ImageBackground>
  );
}

const mapStateToProps = (state: AppState) => ({ loading: state.auth.userLoading });

export default connect(mapStateToProps)(withLoading(Login));
