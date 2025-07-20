import { Colors } from '@/app/constants/colors/colors';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { Fonts } from '@/app/constants/fonts/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container1: {
    padding: Dimensions.PADDING.md,
    backgroundColor: Colors.background.primary,
    borderRadius: Dimensions.BORDER_RADIUS.md,
  },
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
  stationName: {
    fontFamily: Fonts.light
  },
  dot: {
    height: Dimensions.MARGIN.xxs,
    width: Dimensions.MARGIN.xxs,
    backgroundColor: Colors.border.divider,
    borderRadius: Dimensions.BORDER_RADIUS.circle
  },
  relative: {
    position: 'relative',
  },
  line: {
    position: 'absolute',
    left: Dimensions.MARGIN.xxs / 2,
    top: '50%',
    height: 2,
    backgroundColor: '#263238',
    zIndex: 0,
    transform: [{ translateY: -1 }],
  },
});

export default styles;
