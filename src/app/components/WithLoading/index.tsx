import React, { ReactNode } from 'react';
import { ActivityIndicator } from 'react-native';

import styles from './styles';

function WithLoading(Component: ReactNode) {
  return ({ isLoading, ...props }) =>
    isLoading ? <ActivityIndicator style={styles.loader} /> : <Component {...props} />;
}

export default WithLoading;
