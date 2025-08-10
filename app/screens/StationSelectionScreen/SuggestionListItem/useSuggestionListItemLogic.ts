import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { useColors } from '@/app/contexts/ThemeContext';
import { RecentRoute, addRecentRoute, removeRecentRoute } from '@/app/redux/features/recentRoutes/recentRoutes';
import { useAppDispatch } from '@/app/redux/hook';
import { useCallback, useEffect, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export function useSuggestionListItemLogic(route: RecentRoute) {
  const fromName = route.from.stop_name;
  const toName = route.to.stop_name;
  const colors = useColors();

  // State to store AppView width and metro icon width
  const [containerWidth, setContainerWidth] = useState(0);
  const [metroIconWidth, setMetroIconWidth] = useState(0);
  const iconTranslateX = useSharedValue(0);
  const dispatch = useAppDispatch();

  // For switch icon rotation
  const switchRotation = useSharedValue(0);

  const isFavourite = route.favourite;

  // Animate to half the width when width is known
  const startMetroAnimation = useCallback(() => {
    if (containerWidth > 0 && metroIconWidth > 0) {
      iconTranslateX.value = 0;
      const targetPosition = (containerWidth / 2) - (metroIconWidth / 3);
      iconTranslateX.value = withTiming(targetPosition, {
        duration: 1200,
        easing: Easing.out(Easing.exp),
      });
    }
  }, [containerWidth, metroIconWidth, iconTranslateX]);

  useEffect(() => {
    startMetroAnimation();
  }, [containerWidth, metroIconWidth, startMetroAnimation]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: iconTranslateX.value }],
    position: 'absolute',
    left: 0,
    top: -Dimensions.MARGIN.xxxs * 1.7,
    borderRadius: Dimensions.BORDER_RADIUS.sm,
    paddingHorizontal: Dimensions.PADDING.xs,
  }));

  // onLayout handler to get container width
  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
  }, []);

  // onLayout handler to get metro icon width
  const handleMetroLayout = useCallback((event: LayoutChangeEvent) => {
    setMetroIconWidth(event.nativeEvent.layout.width);
  }, []);

  // Heart (toggle favourite)
  const onHeart = useCallback(() => {
    dispatch(addRecentRoute({ from: route.from, to: route.to, favourite: !route.favourite }));
  }, [dispatch, route]);

  // Switch (swap from/to) and animate icon
  const onSwitch = useCallback(() => {
    // Animate the switch icon
    switchRotation.value = 0;
    switchRotation.value = withTiming(360, {
      duration: 600,
      easing: Easing.out(Easing.exp),
    }, () => {
      switchRotation.value = 0; // reset for next time
    });
    // Restart metro animation
    startMetroAnimation();
    // Swap route
    dispatch(addRecentRoute({ from: route.to, to: route.from, favourite: route.favourite }));
  }, [dispatch, route, switchRotation, startMetroAnimation]);

  // Animated style for switch icon
  const animatedSwitchStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${switchRotation.value}deg` }],
  }));

  // Delete (remove from recent)
  const onDelete = useCallback(() => {
    dispatch(removeRecentRoute({ from: route.from, to: route.to }));
  }, [dispatch, route]);

  return {
    fromName,
    toName,
    animatedIconStyle,
    handleLayout,
    handleMetroLayout,
    containerWidth,
    onHeart,
    onSwitch,
    onDelete,
    isFavourite,
    animatedSwitchStyle,
  };
}
