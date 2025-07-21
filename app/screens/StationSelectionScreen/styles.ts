import { Colors } from '@/app/constants/colors/colors';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { Fonts } from '@/app/constants/fonts/fonts';
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
  headerContainer: {
    backgroundColor: Colors.background.earn,
    width: 'auto',
    borderRadius: Dimensions.BORDER_RADIUS.lg,
    alignItems: 'center',
    borderWidth: Dimensions.BORDER_WIDTH.regular,
    borderColor: Colors.status.pending,
    padding: Dimensions.PADDING.xs,
  },
  headerText: {
    fontFamily: Fonts.regular,
    
  },
  headerComponentStyle: {
    paddingVertical: Dimensions.PADDING.sm,
  }
});

export default styles;
