import React from 'react';
import { ActivityIndicator, Platform, StatusBar, Text, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useScreenWrapperLogic } from './useScreenWrapperLogic';
import { Colors } from '@/app/constants/colors/colors';
import { LoadingComponent } from '@/app/components/loadingComponent';

interface ScreenWrapperProps {
  statusBarColor?: string;
  statusBarTheme?: 'light-content' | 'dark-content';
  loading?: boolean;
  screenName?: string;
  children: React.ReactNode;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  statusBarColor = Colors.background.primary,
  statusBarTheme = 'dark-content',
  loading = false,
  screenName,
  children,
}) => {
  const insets = useSafeAreaInsets();
  useScreenWrapperLogic(screenName);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar
        backgroundColor={statusBarColor}
        barStyle={statusBarTheme}
        translucent={Platform.OS === 'android'}
      />
      
      {loading ? (
        <LoadingComponent message="Loading Metro Data..." />
      ) : (
        children
      )}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
