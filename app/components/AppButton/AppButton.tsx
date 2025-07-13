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
import { Colors } from '../../constants/colors/colors';
import { styles } from './styles';
import { ElevationConfig, useAppButtonLogic } from './useAppButtonLogic';
  
  type AppButtonProps = {
    title: string;
    onPress?: () => void;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: object;
    type?: 'primary' | 'secondary';
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
    const {handleOnClick, handlePressIn, handlePressOut, boxShadow, scale} = useAppButtonLogic(
      disabled,
      onPress,
      elevation,
      haptic,
    );
  
    const buttonStyle = [
      type === 'primary' ? styles.primaryContainer : styles.secondaryContainer,
      loading && {alignItems: 'flex-start' as const},
      disabled ? styles.disabledContainer : null,
      elevation?.enabled && {boxShadow},
      style,
    ].filter(Boolean);
  
    const animatedStyle = {
      transform: [{ scale: scale }],
    };
  
    return (
      <Animated.View style={[animatedStyle,buttonStyle]}>
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
                type === 'primary' ? styles.primaryText : styles.secondaryText,
                textStyle,
              ]}>
              {loading && loadingText ? loadingText : title}
            </Text>
          )}
          {loading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator color={Colors.text.inverse} />
            </View>
          )}
        </Pressable>
      </Animated.View>
    );
  };
  
  export default AppButton;