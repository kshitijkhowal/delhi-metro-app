import AppTextInput from '@/app/components/AppTextInput';
import { HeaderComponent } from '@/app/components/headerComponent';
import { useAppSelector } from '@/app/redux/hook';
import ScreenWrapper from '@/app/wrapper/ScreenWrapper/ScreenWrapper';
import React from 'react';
import { FlatList, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import SuggestionListItem from './SuggestionListItem';
import { useStationSelectionScreenLogic } from './useStationSelectionScreenLogic';
import { RecentRoute } from '@/app/redux/features/recentRoutes/recentRoutes';
import { Colors } from '@/app/constants/colors/colors';

const StationSelectionScreen = () => {
    const {
        route,
        fromStation,
        toStation,
        navigateToStationPicker,
        handleShowRoute,
        isButtonDisabled,
        buttonText,
        setFromStation,
        setToStation
    } = useStationSelectionScreenLogic();

    const recentRoutes = useAppSelector(state => state.recentRoutes.routes);

    const handleSuggestionPress = (recentRoute: RecentRoute) => {
        setFromStation(recentRoute.from);
        setToStation(recentRoute.to);
    };

    return (
        <ScreenWrapper
            screenName={route.name}
            backgroundColor={Colors.background.secondary}
            bottomButtonProps={{
                title: buttonText,
                onPress: handleShowRoute,
                disabled: isButtonDisabled,
                type: 'primary',
                elevation: {
                    enabled: true,
                },
                haptic: {
                    enabled: true,
                }
            }}
        >
            <HeaderComponent
                values={{ title: 'Select Stations' }}
                iconMap={[]}
                theme='primary'
            />

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => navigateToStationPicker('from')}>
                        <AppTextInput
                            value={fromStation?.stop_name || ''}
                            onChangeText={() => { }}
                            placeholder="Select departure station"
                            editable={false}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => navigateToStationPicker('to')}>
                        <AppTextInput
                            value={toStation?.stop_name || ''}
                            onChangeText={() => { }}
                            placeholder="Select destination station"
                            editable={false}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Suggestions FlatList */}
            {recentRoutes.length > 0 && (
                <FlatList
                    data={recentRoutes}
                    keyExtractor={(_, idx) => idx.toString()}
                    renderItem={({ item }) => (
                        <SuggestionListItem route={item} onPress={handleSuggestionPress} />
                    )}
                    style={{ marginBottom: 16 }}
                />
            )}

        </ScreenWrapper>
    );
};

export default StationSelectionScreen;
