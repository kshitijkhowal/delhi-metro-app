import React, { useCallback, useMemo } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import Animated from 'react-native-reanimated';
import { styles } from './styles';
import { useAppTextInputLogic } from './useAppTextInputLogic';

interface AppTextInputProps extends TextInputProps {
  // No additional props needed - just extends TextInputProps
}

const AppTextInput: React.FC<AppTextInputProps> = React.memo((props) => {
  const {
    labelStyle,
    containerStyle,
    handleLayout,
    handleLabelLayout,
    handleFocus,
    handleBlur,
    handleTextChange,
    colors,
  } = useAppTextInputLogic();
  
  // Memoize static styles to prevent recreation on every render
  const inputStyle = useMemo(() => [
    styles.input,
    { 
      color: colors.text.primary,
    },
    props.style
  ], [colors.text.primary, props.style]);
  
  const handleInputFocus = useCallback((event: any) => {
    handleFocus(event);
    props.onFocus?.(event);
  }, [handleFocus, props.onFocus]);
  
  const handleInputBlur = useCallback((event: any) => {
    handleBlur(event);
    props.onBlur?.(event);
  }, [handleBlur, props.onBlur]);
  
  const handleInputTextChange = useCallback((text: string) => {
    handleTextChange(text);
    props.onChangeText?.(text);
  }, [handleTextChange, props.onChangeText]);
  
  return (
    <Animated.View 
      style={[styles.container, containerStyle]}
      onLayout={handleLayout}
    >
      <Animated.Text 
        style={[styles.floatingLabel, labelStyle]}
        onLayout={handleLabelLayout}
      >
        {props.placeholder}
      </Animated.Text>
      <TextInput 
        {...props}
        style={inputStyle}
        placeholderTextColor={colors.text.secondary}
        placeholder=""
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        onChangeText={handleInputTextChange}
      />
    </Animated.View>
  );
});

AppTextInput.displayName = 'AppTextInput';

export default AppTextInput;
