import { SystemBarStyle } from 'react-native-edge-to-edge';

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