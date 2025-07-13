import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import DashboardScreen from '../screens/DashboardScreen';
import SplashScreen from '../screens/SplashScreen';
import type { RootStackParamList } from './types';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => (
    <Provider store={store}>

        <NavigationContainer>

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
                {/* Add more screens here */}
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
);

export default AppNavigator; 