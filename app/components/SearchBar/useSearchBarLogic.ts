import { useThemeColors } from '@/app/hooks/useThemeColors';
import { useCallback, useEffect, useImperativeHandle, useRef } from 'react';
import { TextInput } from 'react-native';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import type { SearchBarImperativeHandler, SearchBarProps } from './types';

export function useSearchBarLogic(
  props: SearchBarProps,
  ref: React.Ref<SearchBarImperativeHandler>
) {
  const {
    placeholder = 'Search...',
    value = '',
    onChangeText,
    onSearch,
    onFocus,
    onBlur,
    onClear,
    disabled = false,
    autoFocus = false,
  } = props;

  const colors = useThemeColors();
  const inputRef = useRef<TextInput>(null);
  
  // Animated value for icon transition (0 = search icon, 1 = cross icon)
  const iconTransition = useSharedValue(0);
  
  // Update icon transition when value changes
  useEffect(() => {
    const hasText = !!value && value.length > 0;
    iconTransition.value = withTiming(hasText ? 1 : 0, { duration: 200 });
  }, [value, iconTransition]);

  // Imperative handler
  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus();
    },
    blur: () => {
      inputRef.current?.blur();
    },
    clear: () => {
      onChangeText?.('');
      onClear?.();
    },
    submit: () => {
      if (value.trim()) {
        onSearch?.(value.trim());
      }
    },
    getValue: () => value,
    setValue: (newValue: string) => {
      onChangeText?.(newValue);
    },
  }), [value, onChangeText, onClear, onSearch]);
  
  // Handle text changes
  const handleTextChange = useCallback((text: string) => {
    onChangeText?.(text);
  }, [onChangeText]);

  // Handle search submission
  const handleSearch = useCallback((text: string) => {
    if (text.trim()) {
      onSearch?.(text.trim());
    }
  }, [onSearch]);

  // Handle focus
  const handleFocus = useCallback(() => {
    onFocus?.();
  }, [onFocus]);

  // Handle blur
  const handleBlur = useCallback(() => {
    onBlur?.();
  }, [onBlur]);

  // Handle clear
  const handleClear = useCallback(() => {
    onChangeText?.('');
    onClear?.();
  }, [onChangeText, onClear]);

  // Animated styles for icons
  const searchIconStyle = useAnimatedStyle(() => {
    const opacity = 1 - iconTransition.value;
    const scale = 1 - iconTransition.value * 0.3;
    return {
      opacity,
      transform: [{ scale }],
    };
  }, []);

  const crossIconStyle = useAnimatedStyle(() => {
    const opacity = iconTransition.value;
    const scale = 0.7 + iconTransition.value * 0.3;
    return {
      opacity,
      transform: [{ scale }],
    };
  }, []);

  return {
    inputRef,
    handleTextChange,
    handleSearch,
    handleFocus,
    handleBlur,
    handleClear,
    colors,
    placeholder,
    value,
    disabled,
    autoFocus,
    searchIconStyle,
    crossIconStyle,
  };
}
