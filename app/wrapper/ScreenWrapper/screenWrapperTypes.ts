import { SystemBarStyle } from 'react-native-edge-to-edge';

export interface ThemeColors {
  theme: {
    primary: string;
    secondary: string;
  };
  status: {
    success: string;
    warning: string;
    error: string;
    inactive: string;
    pending: string;
  };
  text: {
    primary: string;
    secondary: string;
  };
  background: {
    primary: string;
    secondary: string;
  };
  View: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  border: {
    primary: string;
    secondary: string;
  };
}

export interface ScreenWrapperProps {
  screenName: string;
  backgroundColor?: string | string[];
  statusBarStyle?: SystemBarStyle;
  children: React.ReactNode;
  loading?: boolean;
  avoidStatusBar?: boolean;
  avoidBottomInset?: boolean;
  avoidScreenCutout?: boolean;
  fullScreen?: boolean;
}