import { Colors } from "@/app/constants/colors/colors";
import { Dimensions } from "@/app/constants/dimensions/dimensions";
import { Fonts } from "@/app/constants/fonts/fonts";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    headerContainer: {
        marginHorizontal: Dimensions.PADDING.md,
        marginVertical: Dimensions.PADDING.md,
        borderRadius: Dimensions.BORDER_RADIUS.lg,
        borderWidth: Dimensions.BORDER_WIDTH.regular,
        borderColor: Colors.theme.primary.default,
        paddingHorizontal: Dimensions.PADDING.md,
        paddingVertical: Dimensions.PADDING.md,
        backgroundColor: Colors.background.primary,
    },
    toFromStationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: Dimensions.MARGIN.md,
    },
    toFromStationItem: {
        fontFamily: Fonts.medium,
        fontSize: Dimensions.TEXT.md,
        color: Colors.text.primary,
    },
    metroIconContainer: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    toStation: {
        flex: 1,
        textAlign: 'left',
    },
    fromStation: {
        flex: 1,
        textAlign: 'right',
    },
    routeDetailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    valueHeadingContainer: {
        gap: Dimensions.MARGIN.xxxxs,
        alignItems: 'center',
        justifyContent: 'center'
    },
    detailIconContainer: {
    },
    routeDetailItem: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:'space-around',
        borderWidth: Dimensions.BORDER_WIDTH.regular,
        margin: Dimensions.PADDING.xs,
        borderRadius: Dimensions.BORDER_RADIUS.circle,
        paddingLeft:2,
    },
    detailLabel: {
        fontFamily: Fonts.regular,
        fontSize: Dimensions.TEXT.xs,
        color: Colors.text.secondary,
    },
    detailValue: {
        fontFamily: Fonts.bold,
        fontSize: Dimensions.TEXT.sm,
        color: Colors.theme.primary.default,
    },
});
