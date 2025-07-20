import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.PADDING.lg,
    paddingTop: Dimensions.PADDING.md,
  },
  inputContainer: {
    marginBottom: Dimensions.MARGIN.lg,
  },
  label: {
    fontSize: Dimensions.TEXT.sm,
    fontWeight: '500',
    marginBottom: Dimensions.MARGIN.xs,
    color: '#000000',
  },
});

export default styles;
