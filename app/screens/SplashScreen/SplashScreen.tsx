import React from 'react';
import { LoadingComponent } from '../../components/loadingComponent';
import ScreenWrapper from '../../wrapper/ScreenWrapper/ScreenWrapper';
import { useSplashScreenLogic } from './useSplashScreenLogic';
import { View } from 'react-native';

const SplashScreen = () => {
  const { loading } = useSplashScreenLogic();

  return (
    <ScreenWrapper loading={true} screenName="Splash Screen">
      <View/>
    </ScreenWrapper>
  );
};

export default SplashScreen;
