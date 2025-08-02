import { ThemePaletteType } from '@/app/constants/betterColors/betterColors.d';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { Fonts } from '@/app/constants/fonts/fonts';
import { StyleSheet } from 'react-native';

// Define the type for our styles object
type StylesType = {
  // Static styles
  container1_1: any;
  container1_2: any;
  relative: any;
  iconButtonRow: any;
  switchHeartContainer: any;
  // Theme functions
  container1: (colors: ThemePaletteType) => any;
  stationName: (colors: ThemePaletteType) => any;
  dot: (colors: ThemePaletteType) => any;
  line: (colors: ThemePaletteType, containerWidth: number) => any;
  animatedIcon: (colors: ThemePaletteType) => any;
  iconButton: (colors: ThemePaletteType) => any;
};

const baseStyles = StyleSheet.create({
  container1_1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container1_2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: Dimensions.MARGIN.sm,
    marginVertical: Dimensions.PADDING.md
  },
  relative: {
    position: 'relative',
  },
  iconButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  switchHeartContainer: {
    flexDirection: 'row',
  }
});

// Combined style functions that include both static and theme styles
const container1 = (colors: ThemePaletteType) => ({
  padding: Dimensions.PADDING.md,
  borderRadius: Dimensions.BORDER_RADIUS.md,
  borderWidth: Dimensions.BORDER_WIDTH.thin,
  backgroundColor: colors.theme.primary + '10',
  borderColor: colors.border.primary, 
});

const stationName = (colors: ThemePaletteType) => ({
  fontFamily: Fonts.light,
  color: colors.text.primary
});

const dot = (colors: ThemePaletteType) => ({
  height: Dimensions.MARGIN.xxs,
  width: Dimensions.MARGIN.xxs,
  borderRadius: Dimensions.BORDER_RADIUS.circle,
  backgroundColor: colors.theme.secondary
});

const line = (colors: ThemePaletteType, containerWidth: number) => ({
  position: 'absolute',
  left: Dimensions.MARGIN.xxs / 2,
  top: '50%',
  height: 2,
  zIndex: 0,
  transform: [{ translateY: -1 }],
  width: containerWidth - Dimensions.MARGIN.xxs,
  backgroundColor: colors.theme.secondary 
});

const animatedIcon = (colors: ThemePaletteType) => ({
  backgroundColor: colors.background.primary
});

const iconButton = (colors: ThemePaletteType) => ({
  marginLeft: Dimensions.MARGIN.xs,
  padding: Dimensions.PADDING.xs,
  paddingHorizontal: Dimensions.PADDING.md,
  borderRadius: Dimensions.BORDER_RADIUS.circle,
  width: 'auto',
  backgroundColor: 'transparent',
  borderWidth: Dimensions.BORDER_WIDTH.thin,
  borderColor: colors.border.primary
});

// Create the final styles object with proper typing
const styles: StylesType = {
  ...baseStyles,
  container1,
  stationName,
  dot,
  line,
  animatedIcon,
  iconButton,
};

export default styles;
