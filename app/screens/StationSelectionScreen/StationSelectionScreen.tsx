import DoubleSwitchArrow from '@/app/assets/icons/arrowIcons/doubleSwitchArrow';
import AppTextInput from '@/app/components/AppTextInput';
import AppView from '@/app/components/AppView';
import { HeaderComponent } from '@/app/components/headerComponent';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { useColors } from '@/app/contexts/ThemeContext';
import ScreenWrapper from '@/app/wrapper/ScreenWrapper/ScreenWrapper';
import React, { FC } from 'react';
import { FlatList, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './styles';
import SuggestionListItem from './SuggestionListItem';
import { useStationSelectionScreenLogic } from './useStationSelectionScreenLogic';


const StationSelectionScreen : FC = () => {
    const colors = useColors();
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
        onSwitch,
        animatedSwitchStyle,
    } = useStationSelectionScreenLogic();

    const renderSuggestionsHeader : FC = () => {
        return(
            <View style={[styles.headerContainer, { 
                backgroundColor: colors.background.secondary,
                borderColor: colors.status.pending 
            }]}>
                <Text style={[styles.headerText, { color: colors.text.primary }]}>
                    Suggested Routes :
                </Text>
            </View>
        )
    }
    return (
        <ScreenWrapper
            screenName={route.name}
        >
            <HeaderComponent
                values={{ title: 'Select Stations' }}
                iconMap={[]}
            />

            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <AppTextInput
                        value={fromStation?.stop_name || ''}
                        onChangeText={() => { }}
                        placeholder="Select departure station"
                        onFocus={() => navigateToStationPicker('from')}
                        editable={true}
                        selectTextOnFocus={false}
                        caretHidden={true}
                    />
                </View>

                <AppView
                    onPress={onSwitch}
                    style={[styles.iconButton, { borderColor: colors.border.primary }]}
                    elevation={{ enabled: true }}
                >
                    <Animated.View style={animatedSwitchStyle}>
                        <DoubleSwitchArrow size={22} strokeWidth={1.2} />
                    </Animated.View>
                </AppView>

                <View style={styles.inputContainer}>
                    <AppTextInput
                        value={toStation?.stop_name || ''}
                        onChangeText={() => { }}
                        placeholder="Select destination station"
                        onFocus={() => navigateToStationPicker('to')}
                        editable={true}
                        selectTextOnFocus={false}
                        caretHidden={true}
                    />
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
                    style={styles.suggestionList}
                    ItemSeparatorComponent={() => <View style={{ height: Dimensions.MARGIN.xs }} />}
                    ListHeaderComponent={renderSuggestionsHeader}
                    ListHeaderComponentStyle={styles.headerComponentStyle}
                />
            )}

            {/* Bottom Button */}
            <View style={styles.bottomContainer}>
                <AppView
                    onPress={handleShowRoute}
                    disabled={isButtonDisabled}
                    style={[
                        styles.showRouteButton,
                        { 
                            backgroundColor: isButtonDisabled ? colors.border.primary : colors.theme.primary,
                        }
                    ]}
                    elevation={{ enabled: true }}
                >
                    <Text style={[
                        styles.showRouteButtonText,
                        { color: isButtonDisabled ? colors.text.secondary : '#FFFFFF' }
                    ]}>
                        {buttonText}
                    </Text>
                </AppView>
            </View>

        </ScreenWrapper>
    );
};

export default StationSelectionScreen;
