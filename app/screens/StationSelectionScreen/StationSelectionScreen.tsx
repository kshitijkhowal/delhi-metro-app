import AppTextInput from '@/app/components/AppTextInput';
import { HeaderComponent } from '@/app/components/headerComponent';
import ScreenWrapper from '@/app/wrapper/ScreenWrapper/ScreenWrapper';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useStationSelectionScreenLogic } from './useStationSelectionScreenLogic';

const StationSelectionScreen = () => {
    const { 
        route, 
        fromStation, 
        toStation, 
        navigateToStationPicker, 
        handleShowRoute, 
        isButtonDisabled, 
        buttonText 
    } = useStationSelectionScreenLogic();
    
    return (
        <ScreenWrapper 
            screenName={route.name}
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
                            onChangeText={() => {}}
                            placeholder="Select departure station"
                            editable={false}
                        />
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <TouchableOpacity onPress={() => navigateToStationPicker('to')}>
                        <AppTextInput
                            value={toStation?.stop_name || ''}
                            onChangeText={() => {}}
                            placeholder="Select destination station"
                            editable={false}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </ScreenWrapper>
    );
};

export default StationSelectionScreen;
