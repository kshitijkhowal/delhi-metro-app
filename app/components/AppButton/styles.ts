import { StyleSheet } from 'react-native';
import { Colors } from '../../constants/colors/colors';
import { Dimensions } from '../../constants/dimensions/dimensions';
import { Fonts } from '../../constants/fonts/fonts';

export const styles = StyleSheet.create({
    primaryContainer: {
        backgroundColor: Colors.theme.primary.default,
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
        color: Colors.text.inverse,
    },
    secondaryContainer: {
        backgroundColor: Colors.background.primary,
        height: Dimensions.PADDING.xxxl,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: Dimensions.BORDER_RADIUS.md,
        borderWidth: Dimensions.BORDER_WIDTH.regular,
        borderColor: Colors.theme.primary.default,
        paddingHorizontal: Dimensions.PADDING.md,
    },
    secondaryText: {
        fontFamily: Fonts.medium,
        fontSize: Dimensions.TEXT.md,
        color: Colors.theme.primary.default,
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