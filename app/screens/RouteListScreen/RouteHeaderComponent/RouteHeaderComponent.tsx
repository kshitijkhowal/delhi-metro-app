import { FC } from "react";
import { Text, View } from "react-native";
import AppView from "@/app/components/AppView";
import { RouteHeaderComponentProps } from "../RouteListScreen.Types";
import { Dimensions } from "@/app/constants/dimensions/dimensions";
import MetroSideViewAnimated from '../../../assets/icons/metroIcons/metroSideViewAnimated';
import { styles } from './styles'
import useRouteHeaderComponentLogic from "./useRouteHeaderComponentLogic";
import Animated from "react-native-reanimated";
import ClockIcon from '../../../assets/icons/timeIcons/clockIcon';
import SegmentIcon from '../../../assets/icons/metroIcons/segmentIcon';
import InterchangeIcon from '../../../assets/icons/arrowIcons/doubleSwitchArrow';

const RouteHeaderComponent: FC<RouteHeaderComponentProps> = ({ data }) => {
    const {
        metroIconContainerStyle,
        formattedTime,
        routeDetailItemStyle,
        handleToFromStationContainerLayout,
        handleMetroIconContainerLayout,
    } = useRouteHeaderComponentLogic({ data });

    if (!data) return null;

    return (
        <AppView
            style={styles.headerContainer}
            elevation={{ enabled: true }}
        >
            <View
                style={styles.toFromStationContainer}
                onLayout={handleToFromStationContainerLayout}
            >
                <Text style={[styles.toFromStationItem, styles.toStation]}>
                    {data.fromStation.stop_name}
                </Text>
                <Animated.View
                    style={[styles.metroIconContainer, metroIconContainerStyle]}
                    onLayout={handleMetroIconContainerLayout}
                >
                    <MetroSideViewAnimated size={Dimensions.MARGIN.lg} />
                </Animated.View>
                <Text style={[styles.toFromStationItem, styles.fromStation]}>
                    {data.toStation.stop_name}
                </Text>
            </View>

            <View style={styles.routeDetailsContainer}>
                <Animated.View style={[routeDetailItemStyle]}>
                    <AppView elevation={{ enabled: true }} style={styles.routeDetailItem}>
                        <View style={styles.detailIconContainer}>
                            <ClockIcon size={20} strokeWidth={0.5} />
                        </View>
                        <View style={styles.valueHeadingContainer}>
                            <Text style={styles.detailLabel}>Time:</Text>
                            <Text style={styles.detailValue}>{formattedTime}</Text>
                        </View>
                    </AppView>
                </Animated.View>
                <Animated.View style={[routeDetailItemStyle]}>
                    <AppView elevation={{ enabled: true }} style={styles.routeDetailItem}>
                        <View style={styles.detailIconContainer}>
                            <SegmentIcon size={20} strokeWidth={1} />
                        </View>
                        <View style={styles.valueHeadingContainer}>
                            <Text style={styles.detailLabel}>Stations:</Text>
                            <Text style={styles.detailValue}>{data.totalSegments}</Text>
                        </View>
                    </AppView>
                </Animated.View>
                <Animated.View style={[routeDetailItemStyle]}>
                    <AppView elevation={{ enabled: true }} style={styles.routeDetailItem}>
                        <View style={styles.detailIconContainer}>
                            <InterchangeIcon size={20} strokeWidth={1} />
                        </View>
                        <View style={styles.valueHeadingContainer}>
                            <Text style={styles.detailLabel}>Interchanges:</Text>
                            <Text style={styles.detailValue}>{data.totalInterchanges}</Text>
                        </View>
                    </AppView>
                </Animated.View>
            </View>
        </AppView>
    );
};

export default RouteHeaderComponent;
