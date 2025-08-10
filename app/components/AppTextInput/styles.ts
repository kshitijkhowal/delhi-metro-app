import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderWidth: Dimensions.BORDER_WIDTH.regular,
    borderRadius: Dimensions.BORDER_RADIUS.md,
    paddingHorizontal: Dimensions.PADDING.md,

    position: 'relative', // Needed for absolute positioning of floating label
  },
  input: {
    width: '100%',
    fontSize: Dimensions.TEXT.lg,
  },
  floatingLabel: {
    backgroundColor: 'transparent',
    zIndex: 1,
    pointerEvents: 'none',
    marginHorizontal: Dimensions.PADDING.md,
    paddingHorizontal: Dimensions.PADDING.sm,
  },
});
