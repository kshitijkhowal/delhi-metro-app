import * as React from "react";
import Svg, { G, Path, SvgProps } from "react-native-svg";

interface ClockIconProps extends SvgProps {
  size?: number;
  strokeColor?: string;
  strokeWidth?: number;
  rotation?: number;
}

const ClockIcon = ({
  size = 24,
  strokeColor = "#000000",
  strokeWidth = 1,
  rotation = 0,
  style,
  ...props
}: ClockIconProps) => (
  <Svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    style={[{ transform: [{ rotate: `${rotation}deg` }] }, style]}
    {...props}
  >
    <G id="icomoon-ignore" />
    <Path
      d="M16 3.205c-7.066 0-12.795 5.729-12.795 12.795s5.729 12.795 12.795 12.795 12.795-5.729 12.795-12.795c0-7.066-5.729-12.795-12.795-12.795zM16 27.729c-6.467 0-11.729-5.261-11.729-11.729s5.261-11.729 11.729-11.729 11.729 5.261 11.729 11.729c0 6.467-5.261 11.729-11.729 11.729z"
      fill={strokeColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
    <Path
      d="M16 17.066h-6.398v1.066h7.464v-10.619h-1.066z"
      fill={strokeColor}
      stroke={strokeColor}
      strokeWidth={strokeWidth}
    />
  </Svg>
);

export default ClockIcon;
