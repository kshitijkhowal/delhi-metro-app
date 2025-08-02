import { useThemeColors } from "@/app/hooks/useThemeColors";
import * as React from "react";
import Svg, { Circle, Line, SvgProps } from "react-native-svg";

interface MagnifineGlassIconProps extends SvgProps {
  strokeColor?: string;
  strokeWidth?: number;
  rotation?: number;
  size?: number;
}

const MagnifineGlassIcon = ({
  strokeColor,
  strokeWidth = 2,
  rotation = 0,
  size = 32,
  ...props
}: MagnifineGlassIconProps) => {
  const colors = useThemeColors();

  return (
    <Svg
      id="Layer_1"
      viewBox="0 0 32 32"
      width={size}
      height={size}
      style={[props.style, rotation ? { transform: [{ rotate: `${rotation}deg` }] } : undefined]}
      {...props}
    >
      <Circle
        fill="none"
        stroke={strokeColor || colors.text.primary}
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
        cx={19.5}
        cy={12.5}
        r={8.5}
      />
      <Line
        fill="none"
        stroke={strokeColor || colors.text.primary}
        strokeWidth={strokeWidth}
        strokeMiterlimit={10}
        x1={4}
        y1={28}
        x2={14}
        y2={18}
      />
    </Svg>
  );
};

export default MagnifineGlassIcon;
