import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import ScreenWrapper from '../../wrapper/ScreenWrapper/ScreenWrapper';
import styles from './styles';
import { useSplashScreenLogic } from './useSplashScreenLogic';

const SplashScreen = () => {
  const { loading } = useSplashScreenLogic();

  return (
    <ScreenWrapper loading={loading} screenName="Splash Screen">
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#007AFF" />
        <Text style={styles.text}>Loading Metro Data...</Text>
      </View>
    </ScreenWrapper>
  );
};

export default SplashScreen;
