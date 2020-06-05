import React from 'react';
import { Image } from 'react-native';

import goBackIcon from '@assets/ic_back.png';

import styles from './styles';

function BackButton() {
  return <Image source={goBackIcon} style={styles.backButton} />;
}

export default BackButton;
