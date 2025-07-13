import AppButton from '@/app/components/AppButton';
import { AppButtonProps } from '@/app/components/AppButton/AppButton';
import { LoadingComponent } from '@/app/components/loadingComponent';
import { Colors } from '@/app/constants/colors/colors';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useScreenWrapperLogic } from './useScreenWrapperLogic';

interface ScreenWrapperProps {
  statusBarColor?: string;
  statusBarTheme?: 'light-content' | 'dark-content';
  loading?: boolean;
  screenName?: string;
  children: React.ReactNode;
  bottomButtonProps?: AppButtonProps;
}

const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  statusBarColor = Colors.background.primary,
  statusBarTheme = 'dark-content',
  loading = false,
  screenName,
  children,
  bottomButtonProps,
}) => {
  useScreenWrapperLogic(screenName);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: statusBarColor,
      }}
    >
      <StatusBar
        backgroundColor={statusBarColor}
        barStyle={statusBarTheme}
        // translucent={Platform.OS === 'android'}
      />
      
      {loading ? (
        <LoadingComponent message="Loading Metro Data..." />
      ) : (
        children
      )}
      {bottomButtonProps && (
        <View
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: Colors.background.secondary,
            paddingVertical: Dimensions.PADDING.lg,
            paddingHorizontal: Dimensions.PADDING.lg,
            borderTopWidth: Dimensions.BORDER_WIDTH.regular,
            borderColor: Colors.border.primary,
            zIndex: 100,
          }}>
          <AppButton {...bottomButtonProps} />
        </View>
      )}
    </SafeAreaView>
  );
};

export default ScreenWrapper;
