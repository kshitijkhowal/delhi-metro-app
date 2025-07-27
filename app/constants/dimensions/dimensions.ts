import {moderateScale} from 'react-native-size-matters';

export const Dimensions = {
  // Border Radius
  BORDER_RADIUS: {
    xs: moderateScale(4),
    sm: moderateScale(8),
    md: moderateScale(12),
    lg: moderateScale(16),
    xl: moderateScale(20),
    xxl: moderateScale(24),
    circle: moderateScale(999),
  },

  // Padding
  PADDING: {
    xxxs: moderateScale(1),
    xxs: moderateScale(2),
    xs: moderateScale(4),
    sm: moderateScale(8),
    md: moderateScale(12),
    lg: moderateScale(16),
    xl: moderateScale(20),
    xxl: moderateScale(24),
    xxxl: moderateScale(28),
    xxxxl: moderateScale(32),
  },

  // Margin
  MARGIN: {
    xxxxs: moderateScale(2),
    xxxs: moderateScale(4),
    xxs: moderateScale(8),
    xs: moderateScale(10),
    sm: moderateScale(14),
    md: moderateScale(18),
    lg: moderateScale(22),
    xl: moderateScale(26),
    xxl: moderateScale(30),
    xxxl: moderateScale(34),
    xxxxl: moderateScale(38),
  },

  //text
  TEXT: {
    xxxs: moderateScale(6),
    xxs: moderateScale(8),
    xs: moderateScale(10),
    sm: moderateScale(12),
    md: moderateScale(14),
    lg: moderateScale(16),
    xl: moderateScale(18),
    xxl: moderateScale(20),
    xxxl: moderateScale(25),
    xxxxl: moderateScale(30),
    xxxxxl: moderateScale(35),
  },

  // Border Width
  BORDER_WIDTH: {
    thin: 0.5,
    regular: 1,
    thick: 2,
  },

};