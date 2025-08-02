import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as React from 'react';
import { Provider } from 'react-redux';
import { FontsFiles } from './app/constants/fonts/fonts';
import { ThemeProvider } from './app/contexts/ThemeContext';
import AppNavigator from './app/navigation/AppNavigator';
import { store } from './app/redux/store';

export default function App() {
  const [loaded, error] = useFonts(FontsFiles);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}