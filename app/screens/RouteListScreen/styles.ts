import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors/colors';
import { Dimensions } from '../../constants/dimensions/dimensions';
import { Fonts } from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
  },
  headerContainer: {
    padding: Dimensions.PADDING.md,
    backgroundColor: Colors.background.secondary,
    borderBottomWidth: Dimensions.BORDER_WIDTH.thin,
    borderBottomColor: Colors.border.divider,
  },
  routeInfo: {
    marginBottom: Dimensions.MARGIN.sm,
  },
  routeTitle: {
    fontFamily: Fonts.bold,
    fontSize: Dimensions.TEXT.lg,
    color: Colors.text.primary,
    marginBottom: Dimensions.MARGIN.xs,
  },
  routeSubtitle: {
    fontFamily: Fonts.regular,
    fontSize: Dimensions.TEXT.sm,
    color: Colors.text.secondary,
  },
  durationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: Dimensions.MARGIN.xs,
  },
  durationText: {
    fontFamily: Fonts.medium,
    fontSize: Dimensions.TEXT.md,
    color: Colors.theme.primary.default,
  },
  listContainer: {
    flex: 1,
  },
  segmentItem: {
    padding: Dimensions.PADDING.md,
    borderBottomWidth: Dimensions.BORDER_WIDTH.thin,
    borderBottomColor: Colors.border.divider,
    backgroundColor: Colors.background.primary,
  },
  segmentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: Dimensions.MARGIN.xs,
  },
  stationName: {
    fontFamily: Fonts.medium,
    fontSize: Dimensions.TEXT.md,
    color: Colors.text.primary,
    flex: 1,
  },
  duration: {
    fontFamily: Fonts.regular,
    fontSize: Dimensions.TEXT.sm,
    color: Colors.text.secondary,
  },
  lineIndicator: {
    width: Dimensions.PADDING.xs,
    height: Dimensions.PADDING.xs,
    borderRadius: Dimensions.BORDER_RADIUS.circle,
    backgroundColor: Colors.theme.primary.default,
    marginRight: Dimensions.MARGIN.xs,
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

