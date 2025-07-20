import { useState } from 'react';
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
}

const DEFAULT_ELEVATION_CONFIG = {
  enabled: false,
  shadowX: 2,
  shadowY: 2,
  shadowBlur: 2,
  shadowSpread: 1,
  shadowAlpha: 0.15,
  duration: 250,
  scale: 0.98,
};

export const useAppViewLogic = (
  disabled: boolean | undefined,
  onPress: (() => void) | undefined,
  elevationConfig?: ElevationConfig
) => {
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

  const [boxShadow, setBoxShadow] = useState(
    `${config.shadowX}px ${config.shadowY}px ${config.shadowBlur}px ${config.shadowSpread}px rgba(0,0,0,${config.shadowAlpha})`
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
      const shadow = `${x.toFixed(0)}px ${y.toFixed(0)}px ${blur.toFixed(0)}px ${spread.toFixed(0)}px rgba(0,0,0,${alpha})`;
      runOnJS(setBoxShadow)(shadow);
    },
    []
  );

  return { handlePressIn, handlePressOut, boxShadow, scale };
};
