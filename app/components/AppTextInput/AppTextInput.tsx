import React, { forwardRef, useEffect, useRef } from 'react';
import { Animated, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { AppTextInputProps } from './types';
import { useAppTextInputLogic } from './useAppTextInputLogic';

const AppTextInput = forwardRef<TextInput, AppTextInputProps>(
  ({ error, placeholder, value, ...props }, ref) => {
    const { isFocused, handleFocus, handleBlur, colors } = useAppTextInputLogic();
    
    // Animation values
    const animatedValue = useRef(new Animated.Value(value ? 1 : 0)).current;
    const labelPosition = useRef(new Animated.Value(value ? 1 : 0)).current;
    
    // Determine if label should be floating
    const shouldFloat = isFocused || !!value;
    
    useEffect(() => {
      Animated.timing(animatedValue, {
        toValue: shouldFloat ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }, [shouldFloat, animatedValue]);
    
    useEffect(() => {
      Animated.timing(labelPosition, {
        toValue: shouldFloat ? 1 : 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }, [shouldFloat, labelPosition]);

    const labelStyle = {
      position: 'absolute' as const,
      left: 12,
      top: labelPosition.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 8],
      }),
      fontSize: labelPosition.interpolate({
        inputRange: [0, 1],
        outputRange: [16, 12],
      }),
      color: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.text.placeholder, colors.theme.primary.default],
      }),
      zIndex: 1,
    };

    const containerStyle = {
      backgroundColor: colors.background.primary,
      borderColor: animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [colors.border.input, colors.theme.primary.default],
      }),
    };

    return (
      <View style={[styles.container]}>
        <Animated.View style={[styles.inputContainer, containerStyle]}>
          {placeholder && (
            <Animated.Text style={[styles.floatingLabel, labelStyle]}>
              {placeholder}
            </Animated.Text>
          )}
          <TextInput
            ref={ref}
            style={[
              styles.input,
              {
                color: colors.text.primary,
                paddingTop: shouldFloat ? 24 : 8,
                paddingBottom: 8,
              },
            ]}
            onFocus={handleFocus}
            onBlur={handleBlur}
            value={value}
            {...props}
          />
        </Animated.View>
        {!!error && (
          <Text style={[styles.errorText, { color: colors.status.error.default }]}>
            {error}
          </Text>
        )}
      </View>
    );
  }
);

export default AppTextInput;
