import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DashboardScreen from '../screens/DashboardScreen';
import RouteListScreen from '../screens/RouteListScreen';
import SplashScreen from '../screens/SplashScreen';
import StationPickerScreen from '../screens/StationPickerScreen';
import StationSelectionScreen from '../screens/StationSelectionScreen';
import TestScreen from '../screens/TestScreen/TestScreen';
import type { RootStackParamList } from './types';
import InteractiveMapScreen from '../screens/InteractiveMapScreen/InteractiveMapScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (

    <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="DashboardScreen"
            component={DashboardScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="StationSelectionScreen"
            component={StationSelectionScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="StationPickerScreen"
            component={StationPickerScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="RouteListScreen"
            component={RouteListScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="InteractiveMapScreen"
            component={InteractiveMapScreen}
            options={{ headerShown: false }}
        />
        <Stack.Screen
            name="TestScreen"
            component={TestScreen}
            options={{ headerShown: false }}
        />
        {/* Add more screens here */}
    </Stack.Navigator>
);

export default AppNavigator; 