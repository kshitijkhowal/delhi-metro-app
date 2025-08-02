import { useThemeColors } from "@/app/hooks/useThemeColors";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface BackArrowIconProps extends SvgProps {
  size?: number;
  strokeColor?: string;
  rotation?: number;
}

const BackArrowIcon = ({ size = 24, strokeColor, rotation = 0, ...props }: BackArrowIconProps) => {
  const colors = useThemeColors();
  
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      style={[props.style, rotation ? { transform: [{ rotate: `${rotation}deg` }] } : undefined]}
      {...props}
    >
      <Path
        fill={strokeColor || colors.text.primary}
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
      />
      <Path
        fill={strokeColor || colors.text.primary}
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
      />
    </Svg>
  );
};

export default BackArrowIcon;
