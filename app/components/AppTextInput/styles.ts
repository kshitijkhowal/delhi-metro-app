import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { Fonts } from '@/app/constants/fonts/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    borderRadius: Dimensions.BORDER_RADIUS.md,
    borderWidth: Dimensions.BORDER_WIDTH.regular,
    position: 'relative',
  },
  input: {
    width: '100%',
    borderRadius: Dimensions.BORDER_RADIUS.md,
    borderWidth: 0, // Remove border from input since it's on container
    fontFamily: Fonts.regular,
    fontSize: Dimensions.TEXT.md,
    paddingHorizontal: 12,
  },
  floatingLabel: {
    fontFamily: Fonts.regular,
    backgroundColor: 'transparent',
  },
  inputFocused: {
    // Border color will be applied dynamically
  },
  errorText: {
    fontFamily: Fonts.regular,
    fontSize: Dimensions.TEXT.xs,
    marginTop: 4,
    marginLeft: 4,
  },
});
