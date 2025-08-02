import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { Fonts } from '@/app/constants/fonts/fonts';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.PADDING.lg,
    paddingTop: Dimensions.PADDING.md,
    alignItems:'center',
    gap: Dimensions.MARGIN.sm,
  },
  inputContainer: {
    width:'100%'
  },
  suggestionList: {
    paddingHorizontal: Dimensions.PADDING.md,
    paddingVertical: Dimensions.PADDING.md
  },
  iconButton: {
    padding: Dimensions.PADDING.xs,
    paddingHorizontal: Dimensions.PADDING.md,
    borderRadius: Dimensions.BORDER_RADIUS.circle,
    width: 'auto',
    backgroundColor: 'transparent',
    borderWidth: Dimensions.BORDER_WIDTH.thin,
  },
  headerContainer: {
    width: 'auto',
    borderRadius: Dimensions.BORDER_RADIUS.lg,
    alignItems: 'center',
    borderWidth: Dimensions.BORDER_WIDTH.regular,
    padding: Dimensions.PADDING.xs,
  },
  headerText: {
    fontFamily: Fonts.regular,
  },
  headerComponentStyle: {
    paddingVertical: Dimensions.PADDING.sm,
  },
  bottomContainer: {
    paddingHorizontal: Dimensions.PADDING.lg,
    paddingVertical: Dimensions.PADDING.md,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  showRouteButton: {
    paddingVertical: Dimensions.PADDING.md,
    paddingHorizontal: Dimensions.PADDING.lg,
    borderRadius: Dimensions.BORDER_RADIUS.lg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  showRouteButtonText: {
    fontFamily: Fonts.medium,
    fontSize: Dimensions.TEXT.md,
  },
});

export default styles;
