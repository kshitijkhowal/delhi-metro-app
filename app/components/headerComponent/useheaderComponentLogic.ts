import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import type { LayoutChangeEvent } from 'react-native';
import { TextInput } from 'react-native';
import { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Colors } from '../../constants/colors/colors';

export function useHeaderComponentLogic({
  theme = 'white',
  enableSearch = false,
  onSearchOpen,
  onSearchClose,
  onLayout,
}: {
  actions?: { onLeftPress?: () => void };
  theme?: 'secondary' | 'primary';
  LeftIcon?: React.ComponentType;
  enableSearch?: boolean;
  onSearchOpen?: () => void;
  onSearchClose?: () => void;
  onLayout?: (event: LayoutChangeEvent) => void;
}) {
  const navigation = useNavigation();
  const isPrimary = theme === 'primary';
  const backgroundColor = isPrimary ? Colors.theme.primary.default : Colors.background.primary;
  const titleColor = isPrimary ? Colors.text.inverse : Colors.text.primary;
  const subTitleColor = isPrimary ? Colors.text.inverse : Colors.text.secondary;

  const handleOnBack = () => {
    navigation.goBack();
  };

  // Search bar state and animation logic
  const [searchActive, setSearchActive] = useState(false);
  const inputRef = useRef<TextInput>(null);
  const headerWidth = useSharedValue(0);
  const searchBarXPosition = useSharedValue(0)
  const ANIMATION_DURATION = 300;

  // Ensure searchBarXPosition is always in sync with headerWidth and searchActive
  useEffect(() => {
    if (!searchActive && headerWidth.value > 0) {
      searchBarXPosition.value = headerWidth.value;
    }
    if (searchActive) {
      searchBarXPosition.value = 0;
    }
  }, [searchActive, headerWidth.value]);

  const openSearch = useCallback(() => {
    if (headerWidth.value === 0) return;
    setSearchActive(true);
    onSearchOpen && onSearchOpen();
  }, [onSearchOpen, headerWidth.value]);

  // Animate and focus when searchActive becomes true and headerWidth is known
  useEffect(() => {
    if (searchActive && headerWidth.value > 0) {
      searchBarXPosition.value = headerWidth.value; // Start off-screen
      searchBarXPosition.value = withTiming(0, { duration: ANIMATION_DURATION });
      setTimeout(() => {
        inputRef.current?.focus();
      }, ANIMATION_DURATION);
    }
  }, [searchActive, headerWidth.value]);

  const closeSearch = useCallback(() => {
    inputRef.current?.blur();
    if (headerWidth.value === 0) {
      setSearchActive(false);
      onSearchClose && onSearchClose();
      return;
    }
    searchBarXPosition.value = withTiming(headerWidth.value, { duration: ANIMATION_DURATION }, (finished) => {
      if (finished) {
        runOnJS(setSearchActive)(false);
        if (onSearchClose) runOnJS(onSearchClose)();
      }
    });
  }, [onSearchClose, headerWidth.value]);

  const animatedSearchStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: searchBarXPosition.value },
    ],
  }));

  const HeaderOnLayout = useCallback((event: LayoutChangeEvent) => {
    if (onLayout) onLayout(event);
    headerWidth.value = event.nativeEvent.layout.width;
    if (!searchActive) {
      searchBarXPosition.value = headerWidth.value;
    }
  }, [onLayout, searchActive]);

  return {
    isPrimary,
    backgroundColor,
    titleColor,
    subTitleColor,
    handleOnBack,
    // Search bar logic
    searchActive,
    openSearch,
    closeSearch,
    inputRef,
    animatedSearchStyle,
    HeaderOnLayout,
  };
}
