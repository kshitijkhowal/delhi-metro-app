import { useThemeColors } from "@/app/hooks/useThemeColors";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface HeartIconProps extends SvgProps {
  size?: number;
  fillColor?: string;
  strokeColor?: string;
  strokeWidth?: number;
}

const SVGComponent = ({
  size = 24,
  fillColor,
  strokeColor,
  strokeWidth = 2,
  ...props
}: HeartIconProps) => {
  const colors = useThemeColors();

  const heartPath =
    "M7 3c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z";

  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      {/* First path for the border (background stroke) */}
      <Path
        d={heartPath}
        fill="none"
        stroke={strokeColor || colors.text.primary}
        strokeWidth={strokeWidth}
      />
      {/* Second path for the fill (inner heart) */}
      <Path
        d={heartPath}
        fill={fillColor || colors.text.primary}
        stroke={strokeColor || colors.text.primary}
        strokeWidth={strokeWidth / 2}
      />
    </Svg>
  );
};

export default SVGComponent;
