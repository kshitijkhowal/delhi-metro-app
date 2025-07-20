import AppTextInput from '@/app/components/AppTextInput';
import { HeaderComponent } from '@/app/components/headerComponent';
import ScreenWrapper from '@/app/wrapper/ScreenWrapper/ScreenWrapper';
import React from 'react';
import { FlatList, Pressable, View } from 'react-native';
import styles from './styles';
import SuggestionListItem from './SuggestionListItem';
import { useStationSelectionScreenLogic } from './useStationSelectionScreenLogic';

const StationSelectionScreen = () => {
    const {
        route,
        fromStation,
        toStation,
        navigateToStationPicker,
        handleShowRoute,
        isButtonDisabled,
        buttonText,
        recentRoutes,
        handleSuggestionPress,
    } = useStationSelectionScreenLogic();

    return (
        <ScreenWrapper
            screenName={route.name}
            backgroundColor={"#F5F5F5"}
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
                    <Pressable onPress={() => navigateToStationPicker('from')}>
                        <AppTextInput
                            value={fromStation?.stop_name || ''}
                            onChangeText={() => { }}
                            placeholder="Select departure station"
                            editable={false}
                        />
                    </Pressable>
                </View>

                <View style={styles.inputContainer}>
                    <Pressable onPress={() => navigateToStationPicker('to')}>
                        <AppTextInput
                            value={toStation?.stop_name || ''}
                            onChangeText={() => { }}
                            placeholder="Select destination station"
                            editable={false}
                        />
                    </Pressable>
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
