import React from 'react';
import headerBackground from '@assets/bc_navbar.png';
import { Image } from 'react-native';

import styles from './styles';

function HeaderBackground() {
  return <Image source={headerBackground} style={styles.headerBackground} />;
}

export default HeaderBackground;
