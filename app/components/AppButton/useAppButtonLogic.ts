import { useColors } from '@/app/contexts/ThemeContext';
import * as Haptics from 'expo-haptics';
import { useRef, useState } from 'react';
import { Keyboard } from "react-native";
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
  haptic?: {
    enabled: boolean;
    type?: 'light' | 'medium' | 'heavy' | 'soft' | 'rigid' | 'success' | 'warning' | 'error';
  };
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
  shadowColor: 'primary' as const,
  haptic: {
    enabled: false,
    type: 'light' as const,
  },
};

export const useAppButtonLogic = (
    disabled: boolean | undefined,
    onPress: (() => void) | undefined,
    elevationConfig?: ElevationConfig,
    hapticConfig?: {
        enabled: boolean;
        type?: 'light' | 'medium' | 'heavy' | 'soft' | 'rigid' | 'success' | 'warning' | 'error';
    },
) => {
    const colors = useColors();
    
    // Merge provided config with defaults
    const config = {
      ...DEFAULT_ELEVATION_CONFIG,
      ...elevationConfig,
      haptic: {
        ...DEFAULT_ELEVATION_CONFIG.haptic,
        ...elevationConfig?.haptic,
        ...hapticConfig, // hapticConfig takes precedence
      },
    };

    // Get the appropriate shadow color from theme
    const shadowColorRef = useRef<string>('');
    const getShadowColor = () => {
      const shadowColorKey = config.shadowColor || 'primary';
      const color = colors.shadow[shadowColorKey];
      shadowColorRef.current = color;
      return color;
    };

    // Initialize shadow color
    const currentShadowColor = getShadowColor();

    // Animated shadow values for elevation
    const shadowX = useSharedValue(config.shadowX);
    const shadowY = useSharedValue(config.shadowY);
    const shadowBlur = useSharedValue(config.shadowBlur);
    const shadowSpread = useSharedValue(config.shadowSpread);
    const shadowAlpha = useSharedValue(config.shadowAlpha);
    const scale = useSharedValue(1);
    
    const [boxShadow, setBoxShadow] = useState(
        `${config.shadowX}px ${config.shadowY}px ${config.shadowBlur}px ${config.shadowSpread}px ${currentShadowColor}`
    );

    const handlePressIn = () => {
        if (!config.enabled || disabled) return;
        
        // Trigger haptic feedback on press in
        if (config.haptic?.enabled && config.haptic.type) {
            triggerHaptic(config.haptic.type);
        }
        
        // When pressed, animate to flat (0 values) and scale down
        shadowX.value = withTiming(0, { duration: config.duration });
        shadowY.value = withTiming(0, { duration: config.duration });
        shadowBlur.value = withTiming(0, { duration: config.duration });
        shadowSpread.value = withTiming(0, { duration: config.duration });
        shadowAlpha.value = withTiming(config.shadowAlpha, { duration: config.duration });
        scale.value = withTiming(config.scale, { duration: config.duration });
    };

    const handlePressOut = () => {
        if (!config.enabled || disabled) return;
        
        // When released, animate back to elevated state and scale up
        shadowX.value = withTiming(config.shadowX, { duration: config.duration });
        shadowY.value = withTiming(config.shadowY, { duration: config.duration });
        shadowBlur.value = withTiming(config.shadowBlur, { duration: config.duration });
        shadowSpread.value = withTiming(config.shadowSpread, { duration: config.duration });
        shadowAlpha.value = withTiming(config.shadowAlpha, { duration: config.duration });
        scale.value = withTiming(1, { duration: config.duration });
    };

    // Helper function to trigger haptic feedback
    const triggerHaptic = (type: string) => {
        try {
            switch (type) {
                case 'light':
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                    break;
                case 'medium':
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
                    break;
                case 'heavy':
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
                    break;
                case 'soft':
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
                    break;
                case 'rigid':
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Rigid);
                    break;
                case 'success':
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
                    break;
                case 'warning':
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
                    break;
                case 'error':
                    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Error);
                    break;
                default:
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }
        } catch (error) {
            console.warn('Haptic feedback not available:', error);
        }
    };

    useAnimatedReaction(
        () => [shadowX.value, shadowY.value, shadowBlur.value, shadowSpread.value, shadowAlpha.value],
        ([x, y, blur, spread, alpha]) => {
            const shadow = `${x.toFixed(0)}px ${y.toFixed(0)}px ${blur.toFixed(0)}px ${spread.toFixed(0)}px ${shadowColorRef.current}`;
            runOnJS(setBoxShadow)(shadow);
        },
        []
    );

    const handleOnClick = () => {
        if (!disabled) {
            Keyboard.dismiss();
            onPress && onPress();
        }
    };
    
    return {handleOnClick, handlePressIn, handlePressOut, boxShadow, scale};
};