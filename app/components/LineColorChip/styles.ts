import { Fonts } from '@/app/constants/fonts/fonts';
import { StyleSheet } from 'react-native';
import { Dimensions } from '../../constants/dimensions/dimensions';

export const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: Dimensions.BORDER_WIDTH.regular,
    borderRadius: Dimensions.BORDER_RADIUS.circle,
    paddingHorizontal: Dimensions.PADDING.sm,
    paddingVertical: Dimensions.PADDING.xxs,
    minWidth: 60,
    justifyContent: 'center',
  },
  chipText: {
    fontFamily: Fonts.medium,
    fontSize: Dimensions.TEXT.sm,
  },
});
