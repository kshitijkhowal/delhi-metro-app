import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderRadius: Dimensions.BORDER_RADIUS.circle,
    borderWidth: Dimensions.BORDER_WIDTH.regular,
    paddingLeft: Dimensions.PADDING.md,
    paddingVertical: Dimensions.PADDING.sm,
    position: 'relative',
  },
  
  searchIcon: {
    position: 'absolute',
    right: Dimensions.PADDING.md,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  crossIcon: {
    position: 'absolute',
    right: Dimensions.PADDING.md,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  input: {
    flex: 1,
    fontSize: Dimensions.TEXT.md,
    paddingVertical: Dimensions.PADDING.xs,
    minHeight: 20,
    paddingRight: 48, // Make space for the icon
  },
});
