import { useThemeColors } from "@/app/hooks/useThemeColors";
import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: title */

interface BinIconProps extends SvgProps {
  size?: number;
  strokeWidth?: number;
}

const SVGComponent = ({
  size = 24,
  strokeWidth = 2,
  ...props
}: BinIconProps) => {
  const colors = useThemeColors();

  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      role="img"
      // xmlns="http://www.w3.org/2000/svg"
      aria-labelledby="binIconTitle"
      stroke={colors.text.primary}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      color={colors.text.primary}
      {...props}
    >
      <Path d="M19 6L5 6M14 5L10 5M6 10L6 20C6 20.6666667 6.33333333 21 7 21 7.66666667 21 11 21 17 21 17.6666667 21 18 20.6666667 18 20 18 19.3333333 18 16 18 10" />
    </Svg>
  );
};

export default SVGComponent;
