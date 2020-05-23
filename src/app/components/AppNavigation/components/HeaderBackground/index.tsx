import React from 'react';
import { Image } from 'react-native';
import headerBackground from '@assets/bc_navbar.png';

import styles from './styles';

function Header() {
  return <Image source={headerBackground} style={styles.header} />;
}

export default Header;
