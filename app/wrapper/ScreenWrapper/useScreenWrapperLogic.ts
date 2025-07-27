import { Platform, StatusBarStyle } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SystemBars, SystemBarStyle } from 'react-native-edge-to-edge';

// Map statusBarStyle to SystemBars style prop
export function mapStatusBarStyleToSystemBarsStyle(statusBarStyle?: SystemBarStyle) {
  
  return { statusBarStyle };
}

/**
 * Handles layout for ScreenWrapper, including custom bottom bar support.
 * If customBottomBar is provided, bottomButtonProps is ignored and layout is handled according to customBottomBarHeight.
 */
export function getScreenWrapperLogic({
  backgroundColor = 'white',
  statusBarStyle = 'dark',
  avoidStatusBar = true,
  avoidBottomInset = true,
  avoidScreenCutout = true,
  fullScreen = false,
}: {
  backgroundColor?: string | string[];
  statusBarStyle?: SystemBarStyle;
  avoidStatusBar?: boolean;
  avoidBottomInset?: boolean;
  avoidScreenCutout?: boolean;
  fullScreen?: boolean;
}) {
  const insets = useSafeAreaInsets();

  const paddingTop = avoidStatusBar ? insets.top : 0;
  const paddingBottom = avoidBottomInset ? (Platform.OS === 'ios' ? 0 : insets.bottom) : 0;
  const paddingLeft = avoidScreenCutout ? insets.left : 0;
  const paddingRight = avoidScreenCutout ? insets.right : 0;

  const isGradient = Array.isArray(backgroundColor);
  const wrapperStyle = {
    flex: 1,
    ...(isGradient ? {} : { backgroundColor: backgroundColor as string }),
    marginTop: paddingTop,
    marginBottom: paddingBottom,
    marginLeft: paddingLeft,
    marginRight: paddingRight,
  };
  const linearGradientColors = isGradient ? (backgroundColor as string[]) : undefined;
  const systemBarsStyle = mapStatusBarStyleToSystemBarsStyle(statusBarStyle);
  const systemBarsHidden = fullScreen ? true : undefined;
  return { isGradient, wrapperStyle, linearGradientColors, systemBarsStyle, systemBarsHidden, paddingBottom, paddingTop, paddingLeft, paddingRight };
}