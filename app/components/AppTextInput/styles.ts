import { Colors } from '@/app/constants/colors/colors';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { Fonts } from '@/app/constants/fonts/fonts';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  input: {
    width: '100%',
    borderRadius: Dimensions.BORDER_RADIUS.md,
    borderWidth: Dimensions.BORDER_WIDTH.regular,
    borderColor: Colors.border.input,
    backgroundColor: Colors.background.primary,
    color: Colors.text.primary,
    fontFamily: Fonts.regular,
    fontSize: Dimensions.TEXT.md,
  },
  inputFocused: {
    borderColor: Colors.theme.primary.default,
  },
  errorText: {
    color: Colors.status.error.default,
    fontFamily: Fonts.regular,
    fontSize: Dimensions.TEXT.xs,
  },
});
