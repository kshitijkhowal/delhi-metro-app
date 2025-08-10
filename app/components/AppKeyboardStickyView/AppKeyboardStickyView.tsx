import React from 'react';
import { KeyboardStickyView } from 'react-native-keyboard-controller';
import { useAppKeyboardStickyViewLogic } from './AppKeyboardStickyViewLogic';

interface AppKeyboardStickyViewProps {
  children: React.ReactNode;
  style?: any;
}

export const AppKeyboardStickyView: React.FC<AppKeyboardStickyViewProps> = ({ 
  children, 
  style 
}) => {
  const offset = useAppKeyboardStickyViewLogic();

  return (
    <KeyboardStickyView
      offset={offset}
      style={style}
    >
      {children}
    </KeyboardStickyView>
  );
};