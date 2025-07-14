import { Colors } from '@/app/constants/colors/colors';
import React, { forwardRef } from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { AppTextInputProps } from './types';
import { useAppTextInputLogic } from './useAppTextInputLogic';

const AppTextInput = forwardRef<TextInput, AppTextInputProps>(
  ({ error, ...props }, ref) => {
    const { isFocused, handleFocus, handleBlur } = useAppTextInputLogic();

    return (
      <View style={[styles.container]}>
        <TextInput
          ref={ref}
          placeholderTextColor={Colors.text.primary}
          style={[
            styles.input,
            isFocused && styles.inputFocused,
          ]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {!!error && <Text style={styles.errorText}>{error}</Text>}
      </View>
    );
  }
);

export default AppTextInput;
