import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { Fonts } from '@/app/constants/fonts/fonts';
import { useColors } from '@/app/contexts/ThemeContext';
import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  container1: {
    padding: Dimensions.PADDING.md,
    borderRadius: Dimensions.BORDER_RADIUS.md,
    borderWidth: Dimensions.BORDER_WIDTH.thin,
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
  relative: {
    position: 'relative',
  },
  stationName: {
    fontFamily: Fonts.light
  },
  dot: {
    height: Dimensions.MARGIN.xxs,
    width: Dimensions.MARGIN.xxs,
    borderRadius: Dimensions.BORDER_RADIUS.circle,    
  },
  line: {
    position: 'absolute',
    left: Dimensions.MARGIN.xxs / 2,
    top: '50%',
    height: 2,
    zIndex: 0,
    transform: [{ translateY: -1 }],
  },
  iconButtonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between'
  },
  iconButton: {
    marginLeft: Dimensions.MARGIN.xs,
    padding: Dimensions.PADDING.xs,
    paddingHorizontal: Dimensions.PADDING.md,
    borderRadius: Dimensions.BORDER_RADIUS.circle,
    width: 'auto',
    backgroundColor: 'transparent',
    borderWidth: Dimensions.BORDER_WIDTH.thin,
  },
  switchHeartContainer: {
    flexDirection: 'row',
  }
});

export default styles;
