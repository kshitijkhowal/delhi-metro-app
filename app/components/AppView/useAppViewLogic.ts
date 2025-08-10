import { useColors } from '@/app/contexts/ThemeContext';
import { useRef, useState } from 'react';
import { runOnJS, useAnimatedReaction, useSharedValue, withTiming } from 'react-native-reanimated';

export interface ElevationConfig {
  enabled: boolean;
  shadowX?: number;
  shadowY?: number;
  shadowBlur?: number;
  shadowSpread?: number;
  shadowAlpha?: number;
  duration?: number;
  scale?: number;
  shadowColor?: 'primary' | 'secondary' | 'tertiary';
}

const DEFAULT_ELEVATION_CONFIG = {
  enabled: false,
  shadowX: 1,
  shadowY: 1,
  shadowBlur: 5,
  shadowSpread: 2,
  shadowAlpha: 0.15,
  duration: 250,
  scale: 0.98,
  shadowColor: 'primary' as const,
};

export const useAppViewLogic = (
  disabled: boolean | undefined,
  onPress: (() => void) | undefined,
  elevationConfig?: ElevationConfig
) => {
  const colors = useColors();
  const config = {
    ...DEFAULT_ELEVATION_CONFIG,
    ...elevationConfig,
  };

  const shadowX = useSharedValue(config.shadowX);
  const shadowY = useSharedValue(config.shadowY);
  const shadowBlur = useSharedValue(config.shadowBlur);
  const shadowSpread = useSharedValue(config.shadowSpread);
  const shadowAlpha = useSharedValue(config.shadowAlpha);
  const scale = useSharedValue(1);

  // Get the appropriate shadow color from theme and store it in a ref
  const shadowColorRef = useRef<string>('');
  const getShadowColor = () => {
    const shadowColorKey = config.shadowColor || 'primary';
    const color = colors.shadow[shadowColorKey];
    shadowColorRef.current = color;
    return color;
  };

  // Initialize shadow color
  const currentShadowColor = getShadowColor();

  const [boxShadow, setBoxShadow] = useState(
    `${config.shadowX}px ${config.shadowY}px ${config.shadowBlur}px ${config.shadowSpread}px ${currentShadowColor}`
  );

  const handlePressIn = () => {
    if (!config.enabled || disabled) return;
    shadowX.value = withTiming(0, { duration: config.duration });
    shadowY.value = withTiming(0, { duration: config.duration });
    shadowBlur.value = withTiming(0, { duration: config.duration });
    shadowSpread.value = withTiming(0, { duration: config.duration });
    shadowAlpha.value = withTiming(config.shadowAlpha, { duration: config.duration });
    scale.value = withTiming(config.scale, { duration: config.duration });
  };

  const handlePressOut = () => {
    if (!config.enabled || disabled) return;
    shadowX.value = withTiming(config.shadowX, { duration: config.duration });
    shadowY.value = withTiming(config.shadowY, { duration: config.duration });
    shadowBlur.value = withTiming(config.shadowBlur, { duration: config.duration });
    shadowSpread.value = withTiming(config.shadowSpread, { duration: config.duration });
    shadowAlpha.value = withTiming(config.shadowAlpha, { duration: config.duration });
    scale.value = withTiming(1, { duration: config.duration });
  };

  useAnimatedReaction(
    () => [shadowX.value, shadowY.value, shadowBlur.value, shadowSpread.value, shadowAlpha.value],
    ([x, y, blur, spread, alpha]) => {
      const shadow = `${x.toFixed(0)}px ${y.toFixed(0)}px ${blur.toFixed(0)}px ${spread.toFixed(0)}px ${shadowColorRef.current}`;
      runOnJS(setBoxShadow)(shadow);
    },
    []
  );

  return { handlePressIn, handlePressOut, boxShadow, scale };
};
