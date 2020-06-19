import LottieView from 'lottie-react-native';
import React from 'react';
import { Text, View, SafeAreaView } from 'react-native';

import lottieAnimation from '@assets/party-lottie.json';

import styles from './styles';

function FreeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inside}>
        <Text style={styles.title}>{`THANKS SO MUCH \n May the force be with you ⭐️`}</Text>
        <LottieView style={styles.animation} source={lottieAnimation} autoPlay loop />
      </View>
    </SafeAreaView>
  );
}

export default FreeScreen;
