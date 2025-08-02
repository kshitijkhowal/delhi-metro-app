import { Colors } from '@/app/constants/betterColors/betterColors';
import { useAppSelector } from '@/app/redux/hook';
import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';
import { SystemBars } from 'react-native-edge-to-edge';
import type { ScreenWrapperProps } from './screenWrapperTypes';
import styles from './styles';
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
  const resolvedTheme = theme === 'dark' ? 'dark' : 'light';
  const colors = Colors[resolvedTheme];
  const effectiveStatusBarStyle = statusBarStyle || (theme === 'dark' ? 'light' : 'dark');
  const effectiveBackgroundColor = backgroundColor || colors.background.primary;

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
    colors,
  });

  const renderContent = () => (
    <View style={[
      styles.content, 
      wrapperStyle,
      { backgroundColor: colors.background.primary }
    ]}>
      <SystemBars 
        style={systemBarsStyle.statusBarStyle ?? 'dark'} 
        hidden={systemBarsHidden} 
      />
      {children}
      {/* {loading && <LoadingComponent />} */}
    </View>
  );

  if (isGradient && linearGradientColors) {
    return (
      <LinearGradient 
        colors={linearGradientColors as any} 
        style={[styles.container, { backgroundColor: colors.background.primary }]}
      >
        {renderContent()}
      </LinearGradient>
    );
  }

  // Use theme-aware background color
  return (
    <View style={[
      styles.container,
      { backgroundColor: typeof effectiveBackgroundColor === 'string' ? effectiveBackgroundColor : colors.background.primary }
    ]}> 
      {renderContent()}
    </View>
  );
};

export default ScreenWrapper;