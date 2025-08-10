import { useColors } from '@/app/contexts/ThemeContext';
import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import type { LayoutChangeEvent } from 'react-native';

interface UseHeaderComponentLogicProps {
  actions?: { onLeftPress?: () => void };
  LeftIcon?: React.ComponentType;
  onLayout?: (event: LayoutChangeEvent) => void;
}

export function useHeaderComponentLogic({
  onLayout,
}: UseHeaderComponentLogicProps) {
  const navigation = useNavigation();
  const colors = useColors();
  const backgroundColor = colors.background.primary;
  const titleColor = colors.text.primary;
  const subTitleColor = colors.text.secondary;

  const handleOnBack = () => {
    navigation.goBack();
  };



  const HeaderOnLayout = useCallback((event: LayoutChangeEvent) => {
    if (onLayout) onLayout(event);
  }, [onLayout]);

  return {
    backgroundColor,
    titleColor,
    subTitleColor,
    handleOnBack,
    HeaderOnLayout,
  };
}
