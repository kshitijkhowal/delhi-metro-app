import * as React from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { store } from './app/redux/store';
import { FontsFiles } from './app/constants/fonts/fonts';
import AppNavigator from './app/navigation/AppNavigator';

export default function App() {
  const [loaded, error] = useFonts(FontsFiles);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  );
}