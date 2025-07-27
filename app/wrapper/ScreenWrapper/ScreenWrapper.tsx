import { useAppSelector } from '@/app/redux/hook';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';
import { SystemBars } from 'react-native-edge-to-edge';
import type { ScreenWrapperProps } from './screenWrapperTypes';
import { getScreenWrapperLogic } from './useScreenWrapperLogic';

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  screenName,
  backgroundColor,
  statusBarStyle,
  children,
  loading = false,
  avoidStatusBar = true,
  avoidBottomInset = true,
  avoidScreenCutout = true,
  fullScreen = false,
}) => {
  const theme = useAppSelector((state) => state.uiPreferences.theme);
  const effectiveStatusBarStyle = statusBarStyle || (theme === 'dark' ? 'light' : 'dark');
  const effectiveBackgroundColor = backgroundColor;

  const {
    isGradient,
    wrapperStyle,
    linearGradientColors,
    systemBarsStyle,
    systemBarsHidden,
  } = getScreenWrapperLogic({
    backgroundColor: effectiveBackgroundColor,
    statusBarStyle: effectiveStatusBarStyle,
    avoidStatusBar,
    avoidBottomInset,
    avoidScreenCutout,
    fullScreen,
  });

  const renderContent = () => (
    <View style={[wrapperStyle]}>
      <SystemBars style={systemBarsStyle.statusBarStyle ?? 'dark'} hidden={systemBarsHidden} />
      {children}
      {/* {loading && <LoadingComponent />} */}
    </View>
  );

  if (isGradient && linearGradientColors) {
    return (
      <LinearGradient colors={linearGradientColors as any} style={{flex:1}}>
        {renderContent()}
      </LinearGradient>
    );
  }

  // Only use backgroundColor if it's a string
  return (
    <View style={[typeof effectiveBackgroundColor === 'string' ? {backgroundColor: effectiveBackgroundColor} : undefined,{flex:1}]}> 
      {renderContent()}
    </View>
  );
};

export default ScreenWrapper;