import React from 'react';

import { Image } from 'react-native';

import styles from './styles';

import goBackIcon from '@assets/ic_back.png';

function BackButton() {
  return <Image source={goBackIcon} style={styles.backButton} />;
}

export default BackButton;
