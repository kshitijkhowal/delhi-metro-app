import { useThemeColors } from "@/app/hooks/useThemeColors";
import * as React from "react";
import { Pressable } from "react-native";
import Svg, { Line, SvgProps } from "react-native-svg";

interface CrossIconProps extends SvgProps {
  strokeColor?: string;
  strokeWidth?: number;
  size?: number;
  onPress?: () => void;
}

const CrossIcon = ({
  strokeColor,
  strokeWidth = 2,
  size = 24,
  onPress,
  ...props
}: CrossIconProps) => {
  const colors = useThemeColors();

  const iconContent = (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Line
        x1={19}
        y1={19}
        x2={5}
        y2={5}
        stroke={strokeColor || colors.text.primary}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Line
        x1={19}
        y1={5}
        x2={5}
        y2={19}
        stroke={strokeColor || colors.text.primary}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={8}>
        {iconContent}
      </Pressable>
    );
  }

  return iconContent;
};

export default CrossIcon;
