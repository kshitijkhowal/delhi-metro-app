import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors/colors';
import { Dimensions } from '../../constants/dimensions/dimensions';
import { Fonts } from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.secondary,

  },
  searchContainer: {
    padding: Dimensions.PADDING.md,
    backgroundColor: Colors.background.primary,
    borderBottomWidth: Dimensions.BORDER_WIDTH.thin,
    borderBottomColor: Colors.border.divider,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: Dimensions.PADDING.md,
  },
  stationItem: {
    padding: Dimensions.PADDING.md,
    borderBottomWidth: Dimensions.BORDER_WIDTH.thin,
    borderBottomColor: Colors.border.divider,
    backgroundColor: Colors.background.primary,
  },
  stationItemPressed: {
    backgroundColor: Colors.background.secondary,
  },
  stationName: {
    fontFamily: Fonts.medium,
    fontSize: Dimensions.TEXT.md,
    color: Colors.text.primary,
    marginBottom: Dimensions.MARGIN.xxs,
  },
  stationCode: {
    fontFamily: Fonts.regular,
    fontSize: Dimensions.TEXT.sm,
    color: Colors.text.secondary,
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
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
