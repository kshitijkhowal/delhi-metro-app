import { Colors } from '@/app/constants/colors/colors';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Dimensions.PADDING.lg,
    paddingTop: Dimensions.PADDING.md,
    alignItems:'center',
    gap: Dimensions.MARGIN.sm,
  },
  inputContainer: {
    width:'100%'
  },
  label: {
    fontSize: Dimensions.TEXT.sm,
    fontWeight: '500',
    marginBottom: Dimensions.MARGIN.xs,
    color: '#000000',
  },
  suggestionList: {
    paddingHorizontal: Dimensions.PADDING.md,
    paddingVertical: Dimensions.PADDING.md
  },
  iconButton: {
    padding: Dimensions.PADDING.xs,
    paddingHorizontal: Dimensions.PADDING.md,
    borderRadius: Dimensions.BORDER_RADIUS.circle,
    width: 'auto',
    backgroundColor: 'transparent',
    borderWidth: Dimensions.BORDER_WIDTH.thin,
    borderColor: Colors.border.primary
  },
});

export default styles;
