import { StyleSheet } from 'react-native';
import { Dimensions } from '../../constants/dimensions/dimensions';

export const styles = StyleSheet.create({
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: Dimensions.BORDER_WIDTH.regular,
    borderRadius: Dimensions.BORDER_RADIUS.md,
    paddingHorizontal: Dimensions.PADDING.md,
    paddingVertical: Dimensions.PADDING.xs,
    minWidth: 60,
    justifyContent: 'center',
  },
  chipText: {
    fontWeight: '600',
    fontSize: Dimensions.TEXT.sm,
    color: '#222',
  },
});
