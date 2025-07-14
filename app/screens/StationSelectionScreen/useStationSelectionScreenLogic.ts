import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { RootStackParamList } from "../../navigation/types";
import { Stop } from "../../types/gtfs.types";

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function useStationSelectionScreenLogic() {
    const route = useRoute();
    const navigation = useNavigation<NavigationProp>();
    const [fromStation, setFromStation] = useState<Stop | null>(null);
    const [toStation, setToStation] = useState<Stop | null>(null);
    const [loading, setLoading] = useState(false);

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

    return {
        route,
        loading,
        fromStation,
        toStation,
        navigateToStationPicker,
        handleShowRoute,
        isButtonDisabled,
        buttonText,
    };
}
