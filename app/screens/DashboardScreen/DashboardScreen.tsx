import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import { useDashboardScreenLogic } from './useDashboardScreenLogic';
import ScreenWrapper from '@/app/wrapper/ScreenWrapper/ScreenWrapper';
import { HeaderComponent } from '@/app/components/headerComponent';

const DashboardScreen = () => {
    const {
        route,
    } = useDashboardScreenLogic();

    return (
        <ScreenWrapper
            screenName={route.name}
        >
            <HeaderComponent
                // noBackButton={true}
                values={{
                    title:'Home'
                }}
                iconMap={[]}
                theme= 'primary'

            />
            <Text>Dashboard Screen</Text>
        </ScreenWrapper>
    );
};

export default DashboardScreen;
