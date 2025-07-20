import { Colors } from '@/app/constants/colors/colors';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { RecentRoute } from '@/app/redux/features/recentRoutes/recentRoutes';
import { useCallback, useEffect, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export function useSuggestionListItemLogic(route: RecentRoute) {
  const fromName = route.from.stop_name;
  const toName = route.to.stop_name;

  // State to store AppView width
  const [containerWidth, setContainerWidth] = useState(0);
  const iconTranslateX = useSharedValue(0);

  // Animate to half the width when width is known
  useEffect(() => {
    if (containerWidth > 0) {
      iconTranslateX.value = withTiming(containerWidth / 2, {
        duration: 1200,
        easing: Easing.out(Easing.exp),
      });
    }
  }, [containerWidth]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: iconTranslateX.value }],
    position: 'absolute',
    left: 0,
    top: -Dimensions.MARGIN.xxxs * 1.7,
    backgroundColor: Colors.background.primary,
    borderRadius: Dimensions.BORDER_RADIUS.sm,
    paddingHorizontal: Dimensions.PADDING.xs,

  }));

  // onLayout handler to get width
  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  }, []);

  return {
    fromName,
    toName,
    animatedIconStyle,
    handleLayout,
    containerWidth,
  };
}
