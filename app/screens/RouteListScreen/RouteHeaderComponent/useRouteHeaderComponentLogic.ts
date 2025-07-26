import { useCallback, useEffect } from "react";
import { LayoutChangeEvent } from "react-native";
import { useAnimatedStyle, useSharedValue } from "react-native-reanimated";
import { RouteHeaderComponentProps } from "../RouteListScreen.Types";
import { TimeUtils } from "@/app/utils/commonUtility/time.Utility";

const useRouteHeaderComponentLogic = ({data}: RouteHeaderComponentProps) => {

    const {hours, minutes} = TimeUtils.formatMilliseconds(data.totalDuration*1000)

    const toFromStationContainerWidth = useSharedValue<number>(0);
    const metroIconContainerWidth = useSharedValue<number>(0);

    const handleToFromStationContainerLayout = useCallback((event: LayoutChangeEvent) => {
        toFromStationContainerWidth.value = event.nativeEvent.layout.width;
    }, []);

    const handleMetroIconContainerLayout = useCallback((event: LayoutChangeEvent) => {
        metroIconContainerWidth.value = event.nativeEvent.layout.width;
    }, []);

    
    const metroIconContainerStyle = useAnimatedStyle(() => ({
        left: toFromStationContainerWidth.value/2 - metroIconContainerWidth.value/2,
        top:-3,
    }),[toFromStationContainerWidth,metroIconContainerWidth])
    useEffect(() => {
        console.log('[metroIconContainerStyle]', metroIconContainerStyle)
    },[metroIconContainerStyle])

    const formattedTime = `${hours ? hours+'hrs' : ''} ${minutes ? minutes+'min' : ''}`;

    const routeDetailItemStyle = useAnimatedStyle(() => ({
        width: toFromStationContainerWidth.value*0.333333
    }))


    
    
    return{
        metroIconContainerStyle,
        routeDetailItemStyle,
        handleToFromStationContainerLayout,
        handleMetroIconContainerLayout,
        formattedTime,
    };
}

export default useRouteHeaderComponentLogic;