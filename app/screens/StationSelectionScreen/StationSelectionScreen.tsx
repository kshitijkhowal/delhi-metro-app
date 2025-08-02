import DoubleSwitchArrow from '@/app/assets/icons/arrowIcons/doubleSwitchArrow';
import AppTextInput from '@/app/components/AppTextInput';
import AppView from '@/app/components/AppView';
import { HeaderComponent } from '@/app/components/headerComponent';
import { Dimensions } from '@/app/constants/dimensions/dimensions';
import ScreenWrapper from '@/app/wrapper/ScreenWrapper/ScreenWrapper';
import React,{FC} from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styles from './styles';
import SuggestionListItem from './SuggestionListItem';
import { useStationSelectionScreenLogic } from './useStationSelectionScreenLogic';


const StationSelectionScreen : FC = () => {
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
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
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
                    <Pressable onPress={() => navigateToStationPicker('from')}>
                        <AppTextInput
                            value={fromStation?.stop_name || ''}
                            onChangeText={() => { }}
                            placeholder="Select departure station"
                            editable={false}
                        />
                    </Pressable>
                </View>

                <AppView
                    onPress={onSwitch}
                    style={styles.iconButton}
                    elevation={{ enabled: true }}
                >
                    <Animated.View style={animatedSwitchStyle}>
                        <DoubleSwitchArrow size={22} strokeWidth={1.2} />
                    </Animated.View>
                </AppView>

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
                    style={styles.suggestionList}
                    ItemSeparatorComponent={() => <View style={{ height: Dimensions.MARGIN.xs }} />}
                    ListHeaderComponent={renderSuggestionsHeader}
                    ListHeaderComponentStyle={styles.headerComponentStyle}
                />
            )}

        </ScreenWrapper>
    );
};

export default StationSelectionScreen;
