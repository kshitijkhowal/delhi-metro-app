import { HeaderComponent } from '@/app/components/headerComponent';
import ScreenWrapper from '@/app/wrapper/ScreenWrapper/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Button, Text } from 'react-native';
import { useDashboardScreenLogic } from './useDashboardScreenLogic';

const DashboardScreen = () => {
    const { route } = useDashboardScreenLogic();
    const navigation = useNavigation();

    return (
        <ScreenWrapper screenName={route.name}>
            <HeaderComponent
                values={{ title: 'Home' }}
                iconMap={[]}
                theme='primary'
                noBackButton={true}
            />
            <Text>Dashboard Screen</Text>
            <Button
                title="Go to Station Selection"
                //@ts-ignore
                onPress={() => navigation.navigate('StationSelectionScreen')}
            />
            <Button
                title="Go to interactive map Selection"
                //@ts-ignore
                onPress={() => navigation.navigate('InteractiveMapScreen')}
            />
            <Button
                title="Go to Test Screen"
                //@ts-ignore
                onPress={() => navigation.navigate('TestScreen')}
            />
            <Button
                title="Go to Device Config Screen"
                //@ts-ignore
                onPress={() => navigation.navigate('ConfigSettingsScreen')}
            />
            
        </ScreenWrapper>
    );
};

export default DashboardScreen;
