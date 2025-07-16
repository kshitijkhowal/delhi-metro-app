import { StyleSheet } from 'react-native';
import { Colors } from '../../../constants/colors/colors';
import { Dimensions } from '../../../constants/dimensions/dimensions';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: Dimensions.PADDING.lg,
    marginVertical: Dimensions.MARGIN.xs,
    marginHorizontal: Dimensions.MARGIN.md,
    backgroundColor: Colors.background.primary,
    borderRadius: Dimensions.BORDER_RADIUS.xl,
  },
  infoContainer: {
    flex: 1,
  },
  stationName: {
    fontSize: Dimensions.TEXT.xl,
    fontWeight: 'bold',
    color: Colors.text.primary,
  },
  hindiName: {
    fontSize: Dimensions.TEXT.sm,
    color: Colors.text.secondary,
    marginTop: 2,
  },
  stationCode: {
    fontSize: Dimensions.TEXT.xs,
    color: Colors.text.tertiary,
    marginTop: 2,
  },
  linesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: Dimensions.PADDING.sm,
  },
  lineChip: {
    borderRadius: Dimensions.BORDER_RADIUS.sm,
    paddingHorizontal: Dimensions.PADDING.md,
    paddingVertical: Dimensions.PADDING.xs,
    marginLeft: Dimensions.PADDING.xs,
    marginRight: 0,
    marginVertical: 2,
    minWidth: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lineChipText: {
    color: Colors.text.inverse,
    fontWeight: '600',
    fontSize: Dimensions.TEXT.xs,
  },
});
