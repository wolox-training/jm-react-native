import React, { ComponentType, FC } from 'react';

import { ActivityIndicator, View } from 'react-native';

import styles from './styles';

import { blue } from '@constants/colors';

interface WithLoadingProps {
  loading: boolean;
}

function WithLoading<P extends object>(Component: ComponentType<P>): FC<P & WithLoadingProps> {
  return ({ loading, ...props }: WithLoadingProps) =>
    loading ? (
      <View style={styles.loader}>
        <ActivityIndicator size="large" color={blue} />
      </View>
    ) : (
      <Component {...(props as P)} />
    );
}

export default WithLoading;
