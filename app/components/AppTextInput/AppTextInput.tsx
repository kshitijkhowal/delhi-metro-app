import { useColors } from '@/app/contexts/ThemeContext';
import React from 'react';
import { Text, TextInput, View } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import { styles } from './styles';
import { useAppTextInputLogic } from './useAppTextInputLogic';

interface AppTextInputProps {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  error?: string;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  editable?: boolean;
  onFocus?: () => void;
  onBlur?: () => void;
  onSubmitEditing?: () => void;
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  autoCorrect?: boolean;
  autoComplete?: 'off' | 'username' | 'password' | 'email' | 'name' | 'tel' | 'street-address' | 'postal-code' | 'cc-number' | 'cc-csc' | 'cc-exp' | 'cc-name';
  textContentType?: any;
  style?: any;
  testID?: string;
}

const AppTextInput: React.FC<AppTextInputProps> = ({
  placeholder,
  value = '',
  onChangeText,
  secureTextEntry = false,
  keyboardType = 'default',
  autoCapitalize = 'sentences',
  error,
  multiline = false,
  numberOfLines = 1,
  maxLength,
  editable = true,
  onFocus,
  onBlur,
  onSubmitEditing,
  returnKeyType = 'done',
  autoCorrect = true,
  autoComplete = 'off',
  textContentType = 'none',
  style,
  testID,
}) => {
  const colors = useColors();
  const { shouldFloat, animatedValue, handleFocus, handleBlur, handleTextChange } =
    useAppTextInputLogic(value, onFocus, onBlur, onChangeText);

  const labelStyle = useAnimatedStyle(() => {
    const translateY = interpolate(animatedValue.value, [0, 1], [16, -8]);
    const fontSize = interpolate(animatedValue.value, [0, 1], [16, 12]);
    const color = animatedValue.value
      ? colors.theme.primary
      : colors.text.secondary;

    return {
      transform: [{ translateY }],
      fontSize,
      color,
    };
  });

  return (
    <View style={[styles.inputContainer, { borderColor: shouldFloat ? colors.theme.primary : colors.border.primary }]}>
      <Animated.Text style={[styles.floatingLabel, labelStyle]}>
        {placeholder}
      </Animated.Text>
      <TextInput
        style={[
          styles.input,
          {
            color: colors.text.primary,
            paddingTop: 20,
          },
          style,
        ]}
        placeholder={''}
        value={value}
        onChangeText={handleTextChange}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        multiline={multiline}
        numberOfLines={numberOfLines}
        maxLength={maxLength}
        editable={editable}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onSubmitEditing={onSubmitEditing}
        returnKeyType={returnKeyType}
        autoCorrect={autoCorrect}
        autoComplete={autoComplete}
        textContentType={textContentType}
        testID={testID}
      />
      {error && (
        <Text style={{ color: colors.status.error, fontSize: 12, marginTop: 4 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

export default AppTextInput;
