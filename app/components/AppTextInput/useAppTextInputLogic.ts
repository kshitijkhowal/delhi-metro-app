import { useThemeColors } from '@/app/hooks/useThemeColors';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

interface LayoutState {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface LabelLayoutState {
  width: number;
  height: number;
}

export function useAppTextInputLogic(initialValue?: string) {
  const colors = useThemeColors();
  const [isFocused, setIsFocused] = useState(false);
  const [hasText, setHasText] = useState(!!initialValue && initialValue.length > 0);
  const [layout, setLayout] = useState<LayoutState>({ x: 0, y: 0, width: 0, height: 0 });
  const [labelLayout, setLabelLayout] = useState<LabelLayoutState>({ width: 0, height: 0 });
  
  const animatedValue = useSharedValue(0);
  
  // Memoize the shouldFloat calculation
  const shouldFloat = useMemo(() => isFocused || hasText, [isFocused, hasText]);
  
  useEffect(() => {
    animatedValue.value = withTiming(shouldFloat ? 1 : 0, { duration: 200 });
  }, [shouldFloat, animatedValue]);

  // Update hasText when initialValue changes
  useEffect(() => {
    setHasText(!!initialValue && initialValue.length > 0);
  }, [initialValue]);
  
  // Memoize layout calculations to avoid recalculation on every render
  const layoutCalculations = useMemo(() => {
    const exactCenterY = (layout.height / 2) - (labelLayout.height / 2);
    const topPosition = -labelLayout.height / 1.9;
    return { exactCenterY, topPosition };
  }, [layout.height, labelLayout.height]);
  
  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    const { x, y, width, height } = event.nativeEvent.layout;
    setLayout({ x, y, width, height });
  }, []);
  
  const handleLabelLayout = useCallback((event: LayoutChangeEvent) => {
    const { width, height } = event.nativeEvent.layout;
    setLabelLayout({ width, height });
  }, []);
  
  const labelStyle = useAnimatedStyle(() => {
    const { exactCenterY, topPosition } = layoutCalculations;
    
    const translateY = interpolate(animatedValue.value, [0, 1], [exactCenterY, topPosition]);
    const fontSize = interpolate(animatedValue.value, [0, 1], [16, 12]);
    const color = animatedValue.value ? colors.text.primary : colors.text.secondary;
    
    return {
      position: 'absolute',
      left: 0,
      top: 0,
      transform: [{ translateY }],
      fontSize,
      color,
      backgroundColor: colors.background.primary,
    };
  }, [layoutCalculations, colors.theme.primary, colors.text.secondary, colors.background.primary]);
  
  const containerStyle = useAnimatedStyle(() => {
    const borderColor = animatedValue.value ? colors.border.secondary : colors.border.primary;
    
    return {
      borderColor,
    };
  }, [colors.border.secondary, colors.border.primary]);
  
  const handleFocus = useCallback((event: any) => {
    setIsFocused(true);
  }, []);
  
  const handleBlur = useCallback((event: any) => {
    setIsFocused(false);
  }, []);
  
  const handleTextChange = useCallback((text: string) => {
    setHasText(text.length > 0);
  }, []);
  
  return {
    isFocused,
    hasText,
    layout,
    labelLayout,
    animatedValue,
    labelStyle,
    containerStyle,
    handleLayout,
    handleLabelLayout,
    handleFocus,
    handleBlur,
    handleTextChange,
    colors,
  };
}
