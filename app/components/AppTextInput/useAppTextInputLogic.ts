import { useCallback, useEffect, useState } from 'react';
import { useSharedValue, withTiming } from 'react-native-reanimated';

export function useAppTextInputLogic(
  value: string,
  onFocus?: () => void,
  onBlur?: () => void,
  onChangeText?: (text: string) => void
) {
  const [isFocused, setIsFocused] = useState(false);
  const animatedValue = useSharedValue(value ? 1 : 0);

  const shouldFloat = isFocused || !!value;

  useEffect(() => {
    animatedValue.value = withTiming(shouldFloat ? 1 : 0, { duration: 200 });
  }, [shouldFloat, animatedValue]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
    onFocus?.();
  }, [onFocus]);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    onBlur?.();
  }, [onBlur]);

  const handleTextChange = useCallback((text: string) => {
    onChangeText?.(text);
  }, [onChangeText]);

  return {
    isFocused,
    shouldFloat,
    animatedValue,
    handleFocus,
    handleBlur,
    handleTextChange,
  };
}
