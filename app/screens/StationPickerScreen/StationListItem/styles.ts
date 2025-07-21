import { Colors } from '@/app/constants/colors/colors';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { Fonts } from '@/app/constants/fonts/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    padding: Dimensions.PADDING.md,
    backgroundColor: Colors.background.primary,
    borderRadius: Dimensions.BORDER_RADIUS.xxl,
    gap: Dimensions.MARGIN.xxxs
  },
  infoContainer: {
    flex: 1,
  },
  stationName: {
    fontSize: Dimensions.TEXT.lg,
    fontFamily: Fonts.medium,
    color: Colors.text.primary,
  },
  hindiName: {
    fontSize: Dimensions.TEXT.sm,
    color: Colors.text.secondary,
  },
  linesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
