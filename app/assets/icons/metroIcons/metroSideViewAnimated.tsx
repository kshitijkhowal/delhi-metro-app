import { useThemeColors } from "@/app/hooks/useThemeColors";
import * as React from "react";
import { useEffect } from "react";
import Animated, {
    Easing,
    useAnimatedProps,
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withRepeat,
    withTiming,
} from "react-native-reanimated";
import Svg, { G, Line, Path, SvgProps } from "react-native-svg";

// Animated versions
const AnimatedLine = Animated.createAnimatedComponent(Line);
const AnimatedG = Animated.createAnimatedComponent(G);

interface MetroSideViewAnimatedProps extends SvgProps {
  size?: number;
  strokeWidth?: number;
  strokeColor?: string;
  flipped?: boolean;
}

const SVGComponent = ({
  size = 32,
  strokeWidth = 1.5,
  strokeColor,
  flipped = false,
  style,
  ...props
}: MetroSideViewAnimatedProps) => {
  const colors = useThemeColors();

  const viewBoxWidth = 32;
  const startX = viewBoxWidth + 45;
  const endX = -5;

  const line1X = useSharedValue(startX);
  const line2X = useSharedValue(startX);
  const line3X = useSharedValue(startX);

  // Shared value for shaking
  const shake = useSharedValue(0);

  useEffect(() => {
    const animateLine = (line: typeof line1X, delay: number) => {
      line.value = withRepeat(
        withDelay(
          delay,
          withTiming(endX, {
            duration: 1000,
            easing: Easing.linear,
          })
        ),
        -1,
        false
      );
    };

    animateLine(line1X, 0);
    animateLine(line2X, 400);
    animateLine(line3X, 800);

    // Shake animation
    shake.value = withRepeat(
      withTiming(1, {
        duration: 1000,
        easing: Easing.linear,
      }),
      -1,
      true // reverse direction
    );
  }, []);

  // Shaking style for the metro body
  const animatedShakeStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: shake.value }],
  }));

  // Animated props for the 3 moving lines
  const animatedPropsLine1 = useAnimatedProps(() => ({
    x1: line1X.value,
    x2: line1X.value - 25,
  }));
  const animatedPropsLine2 = useAnimatedProps(() => ({
    x1: line2X.value,
    x2: line2X.value - 25,
  }));
  const animatedPropsLine3 = useAnimatedProps(() => ({
    x1: line3X.value,
    x2: line3X.value - 25,
  }));

  // Animated props for shaking the metro body group
  const animatedShakeProps = useAnimatedProps(() => ({
    transform: [{ translateX: shake.value }],
  }));

  const finalStrokeColor = strokeColor || colors.text.primary;

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      style={[flipped ? { transform: [{ scaleX: -1 }] } : undefined, style]}
      {...props}
    >
      <G id="passenger_train_x2C__metro_x2C__train_x2C__transport_x2C__tube">
        {/* Metro Body Group with Shake */}
        <AnimatedG id="XMLID_361_" animatedProps={animatedShakeProps}>
          <Path
            d="M2,17.5h4c0.28,0,0.5-0.221,0.5-0.5v-4c0-0.28-0.22-0.5-0.5-0.5H2c-0.28,0-0.5,0.22-0.5,0.5v4C1.5,17.279,1.72,17.5,2,17.5z"
            fill="none"
            stroke={finalStrokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
          />
          <Line
            fill="none"
            stroke={finalStrokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            x1={30.477}
            x2={28.5}
            y1={22.5}
            y2={22.5}
          />
          <Line
            fill="none"
            stroke={finalStrokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            x1={19.5}
            x2={1.5}
            y1={20.5}
            y2={20.5}
          />
          <Path
            d="M22.776,11.5H19.5c-0.55,0-1,0.45-1,1v3c0,1.66,1.34,3,3,3h6.586"
            fill="none"
            stroke={finalStrokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
          />
          <Path
            d="M1.5,8.5h15.52c2.19,0,4.261,1.02,5.58,2.77l7.32,9.65c0.9,1.19,0.79,2.87-0.27,3.93c-0.42,0.42-0.98,0.65-1.57,0.65H1.5"
            fill="none"
            stroke={finalStrokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
          />
          <Path
            d="M9,17.5h4c0.28,0,0.5-0.221,0.5-0.5v-4c0-0.28-0.22-0.5-0.5-0.5H9c-0.28,0-0.5,0.22-0.5,0.5v4C8.5,17.279,8.72,17.5,9,17.5z"
            fill="none"
            stroke={finalStrokeColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
          />
        </AnimatedG>

        {/* Animated Moving Lines */}
        <AnimatedLine
          animatedProps={animatedPropsLine1}
          y1={6.5}
          y2={6.5}
          stroke={finalStrokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
        />
        <AnimatedLine
          animatedProps={animatedPropsLine2}
          y1={29.5}
          y2={29.5}
          stroke={finalStrokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
        />
        <AnimatedLine
          animatedProps={animatedPropsLine3}
          y1={27.5}
          y2={27.5}
          stroke={finalStrokeColor}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit={10}
        />
      </G>
    </Svg>
  );
};

export default SVGComponent;
