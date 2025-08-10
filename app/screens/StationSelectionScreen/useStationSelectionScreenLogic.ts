import { useColors } from '@/app/contexts/ThemeContext';
import { RecentRoute } from '@/app/redux/features/recentRoutes/recentRoutes';
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useState } from "react";
import { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { RootStackParamList } from "../../navigation/types";
import { addRecentRoute } from '../../redux/features/recentRoutes/recentRoutes';
import { useAppDispatch, useAppSelector } from '../../redux/hook';
import { Stop } from "../../types/gtfs.types";

// Move all business logic from StationSelectionScreen.tsx here

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function useStationSelectionScreenLogic() {
    const route = useRoute();
    const navigation = useNavigation<NavigationProp>();
    const colors = useColors();
    const [fromStation, setFromStation] = useState<Stop | null>(null);
    const [toStation, setToStation] = useState<Stop | null>(null);
    const [loading, setLoading] = useState(false);
    const dispatch = useAppDispatch();

    // For switch icon rotation
    const switchRotation = useSharedValue(0);

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

    // Switch (swap from/to) and animate icon
    const onSwitch = useCallback(() => {
        // Animate the switch icon
        switchRotation.value = 0;
        switchRotation.value = withTiming(360, {
            duration: 600,
            easing: Easing.out(Easing.exp),
        }, () => {
            switchRotation.value = 0; // reset for next time
        });
        // Swap stations
        setFromStation(prev => toStation);
        setToStation(prev => fromStation);
    }, [fromStation, toStation, switchRotation]);

    // Animated style for switch icon
    const animatedSwitchStyle = useAnimatedStyle(() => ({
        transform: [{ rotate: `${switchRotation.value}deg` }],
    }));

    return {
        colors,
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
        onSwitch,
        animatedSwitchStyle,
    };
}
