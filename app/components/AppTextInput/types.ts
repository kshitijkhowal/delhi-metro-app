import { TextInputProps } from 'react-native';

export interface AppTextInputProps extends TextInputProps {
  // No additional props needed - just extends TextInputProps
}

export interface LayoutState {
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface LabelLayoutState {
  width: number;
  height: number;
}
