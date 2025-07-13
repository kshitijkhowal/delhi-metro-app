import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { AppTextInputProps } from './types';
import { useAppTextInputLogic } from './useAppTextInputLogic';
import { Colors, ThemeColors } from '@/app/constants/colors/colors';

const AppTextInput: React.FC<AppTextInputProps> = ({
  error,
  ...props
}) => {
  const { isFocused, handleFocus, handleBlur } = useAppTextInputLogic();

  return (
    <View style={[styles.container]}>
      <TextInput
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
};

export default AppTextInput;
