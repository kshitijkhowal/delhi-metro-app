import { FC } from "react";
import { RouteSegment } from "../RouteListScreen.Types";
import { View } from "react-native";

export interface RouteListItemProps { 
    segment: RouteSegment
}

const RouteListItem: FC<RouteListItemProps> = () => {
    return (
        <View></View>
    )
}

export default RouteListItem;