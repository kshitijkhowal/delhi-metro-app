import { useColors } from '@/app/contexts/ThemeContext';
import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  PressableProps,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from './styles';
import { ElevationConfig, useAppButtonLogic } from './useAppButtonLogic';
  
  type AppButtonProps = {
    title?: string;
    onPress?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: object;
    type?: 'primary' | 'secondary' | 'icon';
    loading?: boolean;
    loadingText?: string;
    elevation?: ElevationConfig;
    haptic?: {
      enabled: boolean;
      type?: 'light' | 'medium' | 'heavy' | 'soft' | 'rigid' | 'success' | 'warning' | 'error';
    };
    children?: React.ReactNode;
  } & PressableProps;
  
  export type { AppButtonProps };
  
  const AppButton = ({
    title,
    onPress,
    disabled = false,
    style,
    textStyle,
    type = 'primary',
    loading = false,
    loadingText,
    elevation,
    haptic,
    children,
    ...rest
  }: AppButtonProps) => {
    const colors = useColors();
    const {handleOnClick, handlePressIn, handlePressOut, boxShadow, scale} = useAppButtonLogic(
      disabled,
      onPress,
      elevation,
      haptic,
    );

    const getContainerStyle = () => {
      if (type === 'primary') {
        return {
          ...styles.primaryContainer,
          backgroundColor: colors.button.primary,
        };
      } else {
        return {
          ...styles.secondaryContainer,
          backgroundColor: colors.background.primary,
          borderColor: colors.button.primary,
        };
      }
    };

    const getTextStyle = () => {
      if (type === 'primary') {
        return {
          ...styles.primaryText,
          color: colors.background.primary, // White text on dark button
        };
      } else {
        return {
          ...styles.secondaryText,
          color: colors.button.primary, // Dark text on light button
        };
      }
    };
  
    const buttonStyle = [
      getContainerStyle(),
      loading && {alignItems: 'flex-start' as const},
      disabled ? styles.disabledContainer : null,
      elevation?.enabled && {boxShadow},
      style,
    ].filter(Boolean);
  
    const animatedStyle = {
      transform: [{ scale: scale }],
    };
  
    return (
      <Animated.View style={[animatedStyle, buttonStyle]}>
        <Pressable 
          onPress={handleOnClick}
          onPressIn={handlePressIn}
          onPressOut={handlePressOut}
          style={styles.pressableArea}
          {...rest}>
          {children ? (
            children
          ) : (
            <Text
              style={[
                getTextStyle(),
                textStyle,
              ]}>
              {loading && loadingText ? loadingText : title}
            </Text>
          )}
          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator color={colors.button.primary} />
            </View>
          )}
        </Pressable>
      </Animated.View>
    );
  };
  
  export default AppButton;