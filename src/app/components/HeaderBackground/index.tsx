import React from 'react';

import { Image } from 'react-native';

import styles from './styles';

import headerBackground from '@assets/bc_navbar.png';

function HeaderBackground() {
  return <Image source={headerBackground} style={styles.headerBackground} />;
}

export default HeaderBackground;
