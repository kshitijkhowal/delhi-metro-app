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
        </ScreenWrapper>
    );
};

export default DashboardScreen;
