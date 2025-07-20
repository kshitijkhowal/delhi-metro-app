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
    // justifyContent: 'space-between',
  },
  stationName: {
    fontFamily: Fonts.light
  },
});

export default styles;
