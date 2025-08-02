import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { Fonts } from '@/app/constants/fonts/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: Dimensions.PADDING.md,
    borderRadius: Dimensions.BORDER_RADIUS.xxl,
    gap: Dimensions.MARGIN.xxxs
  },
  infoContainer: {
    flex: 1,
  },
  stationName: {
    fontSize: Dimensions.TEXT.lg,
    fontFamily: Fonts.medium,
  },
  hindiName: {
    fontSize: Dimensions.TEXT.sm,
  },
  linesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
