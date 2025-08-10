import { StyleSheet } from 'react-native';
import { Dimensions } from '../../constants/dimensions/dimensions';
import { Fonts } from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
    primaryContainer: {
        height: Dimensions.PADDING.xl*2,
        width: '100%', 
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Dimensions.BORDER_RADIUS.md,
        paddingHorizontal: Dimensions.PADDING.md,
    },
    primaryText: {
        fontFamily: Fonts.medium,
        fontSize: Dimensions.TEXT.md,
    },
    secondaryContainer: {
        height: Dimensions.PADDING.xxxl,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Dimensions.BORDER_RADIUS.md,
        borderWidth: Dimensions.BORDER_WIDTH.regular,
        paddingHorizontal: Dimensions.PADDING.md,
    },
    secondaryText: {
        fontFamily: Fonts.medium,
        fontSize: Dimensions.TEXT.md,
    },
    loadingContainer: {
        position: 'absolute',
        right: Dimensions.PADDING.lg,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabledContainer: {
        opacity: 0.7,
    },
    pressableArea: {
        width: '100%',
        height: '100%',
        justifyContent:'center',
        alignItems: 'center',
    },
});