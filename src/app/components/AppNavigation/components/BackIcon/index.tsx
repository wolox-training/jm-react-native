import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import backIcon from '@assets/ic_back.png';

import styles from './styles';

function HeaderLeft() {
  return (
    <TouchableOpacity style={styles.leftButton}>
      <Image source={backIcon} style={styles.leftButtonIcon} />
    </TouchableOpacity>
  );
}

export default HeaderLeft;
