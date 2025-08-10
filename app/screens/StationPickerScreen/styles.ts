import { StyleSheet } from 'react-native';
import { Dimensions } from '../../constants/dimensions/dimensions';
import { Fonts } from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: Dimensions.PADDING.md,
    backgroundColor: 'transparent',
  },
  listContainer: {
    flex: 1,
    marginHorizontal: Dimensions.PADDING.md,
    marginTop: Dimensions.PADDING.sm,
    borderRadius: Dimensions.BORDER_RADIUS.xxl
  },
  stationItem: {
    padding: Dimensions.PADDING.md,
    borderBottomWidth: Dimensions.BORDER_WIDTH.thin,
  },
  stationItemPressed: {
  },
  stationName: {
    fontFamily: Fonts.medium,
    fontSize: Dimensions.TEXT.md,
    marginBottom: Dimensions.MARGIN.xxs,
  },
  stationCode: {
    fontFamily: Fonts.regular,
    fontSize: Dimensions.TEXT.sm,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Dimensions.PADDING.xl,
  },
  emptyText: {
    fontFamily: Fonts.regular,
    fontSize: Dimensions.TEXT.md,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
