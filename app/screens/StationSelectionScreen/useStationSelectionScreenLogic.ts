import { RecentRoute } from '@/app/redux/features/recentRoutes/recentRoutes';
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { RootStackParamList } from "../../navigation/types";
import { addRecentRoute } from '../../redux/features/recentRoutes/recentRoutes';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { Stop } from "../../types/gtfs.types";

// Move all business logic from StationSelectionScreen.tsx here

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function useStationSelectionScreenLogic() {
    const route = useRoute();
    const navigation = useNavigation<NavigationProp>();
    const [fromStation, setFromStation] = useState<Stop | null>(null);
    const [toStation, setToStation] = useState<Stop | null>(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    // Get recent routes from redux
    const recentRoutes = useAppSelector(state => state.recentRoutes.routes);

    const handleFromStationSelect = (station: Stop) => {
        setFromStation(station);
    };

    const handleToStationSelect = (station: Stop) => {
        setToStation(station);
    };

    const navigateToStationPicker = (type: 'from' | 'to') => {
        navigation.navigate('StationPickerScreen', {
            title: type === 'from' ? 'Select Departure Station' : 'Select Destination Station',
            onStationSelect: type === 'from' ? handleFromStationSelect : handleToStationSelect,
        });
    };

    const handleShowRoute = () => {
        if (fromStation && toStation) {
            // Save to redux
            dispatch(addRecentRoute({ from: fromStation, to: toStation }));
            navigation.navigate('RouteListScreen', {
                fromStation,
                toStation,
            });
        }
    };

    // Button state logic
    const isButtonDisabled = !fromStation || !toStation;
    const buttonText = !fromStation 
        ? 'Select Departure Station' 
        : !toStation 
        ? 'Select Destination Station' 
        : 'Show Route';

    // Handler for suggestion press
    const handleSuggestionPress = (recentRoute: RecentRoute) => {
        setFromStation(recentRoute.from);
        setToStation(recentRoute.to);
    };

    return {
        route,
        loading,
        fromStation,
        toStation,
        navigateToStationPicker,
        handleShowRoute,
        isButtonDisabled,
        buttonText,
        setFromStation,
        setToStation,
        recentRoutes,
        handleSuggestionPress,
    };
}
