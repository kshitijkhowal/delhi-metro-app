import { Fonts } from '@/app/constants/fonts/fonts';
import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors/colors';
import { Dimensions } from '../../constants/dimensions/dimensions';

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backButton: {
    marginRight: 0,
    paddingHorizontal: Dimensions.PADDING.lg,
    paddingVertical: Dimensions.PADDING.sm,
  },
  titleSection: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: Dimensions.TEXT.lg,
    fontFamily: Fonts.semiBold
  },
  subTitle: {
    lineHeight: 14,
    fontSize: Dimensions.TEXT.md,
  },
  rightSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    padding: Dimensions.PADDING.md
  },
  iconButton: {
    alignContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  iconImageFile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconImage: {
    height: 20,
    width: 20,
  },
  iconText: {
    fontSize: 13,
    marginLeft: 5,
    textTransform: 'capitalize',
  },
  badge: {
    borderRadius: 6,
    position: 'absolute',
    right: 0,
    top: 0,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 9,
    color: Colors.text.inverse,
    fontWeight: 'bold',
  },
  // Animated search bar overlay
  searchOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.background.primary,
    zIndex: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
  searchBackButton: {
    marginRight: 0,
    paddingHorizontal: Dimensions.PADDING.lg,
    paddingVertical: Dimensions.PADDING.sm,
  },
  searchIcon: {
    marginLeft: Dimensions.MARGIN.xs,
    padding: Dimensions.PADDING.sm,
  },
});

export default styles;
