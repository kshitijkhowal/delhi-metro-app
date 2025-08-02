import { Colors } from '@/app/constants/betterColors/betterColors';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { RecentRoute, addRecentRoute, removeRecentRoute } from '@/app/redux/features/recentRoutes/recentRoutes';
import { useAppDispatch } from '@/app/redux/hook';
import { useCallback, useEffect, useState } from 'react';
import { LayoutChangeEvent } from 'react-native';
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

export function useSuggestionListItemLogic(route: RecentRoute) {
  const fromName = route.from.stop_name;
  const toName = route.to.stop_name;

  // State to store AppView width
  const [containerWidth, setContainerWidth] = useState(0);
  const iconTranslateX = useSharedValue(0);
  const dispatch = useAppDispatch();

  // For switch icon rotation
  const switchRotation = useSharedValue(0);

  const isFavourite = route.favourite;

  // Animate to half the width when width is known
  const startMetroAnimation = useCallback(() => {
    if (containerWidth > 0) {
      iconTranslateX.value = 0;
      iconTranslateX.value = withTiming(containerWidth / 2, {
        duration: 1200,
        easing: Easing.out(Easing.exp),
      });
    }
  }, [containerWidth, iconTranslateX]);

  useEffect(() => {
    startMetroAnimation();
  }, [containerWidth, startMetroAnimation]);

  const animatedIconStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: iconTranslateX.value }],
    position: 'absolute',
    left: 0,
    top: -Dimensions.MARGIN.xxxs * 1.7,
    backgroundColor: Colors.light.background.primary,
    borderRadius: Dimensions.BORDER_RADIUS.sm,
    paddingHorizontal: Dimensions.PADDING.xs,
  }));

  // onLayout handler to get width
  const handleLayout = useCallback((event: LayoutChangeEvent) => {
    setContainerWidth(event.nativeEvent.layout.width);
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
    containerWidth,
    onHeart,
    onSwitch,
    onDelete,
    isFavourite,
    animatedSwitchStyle,
  };
}
