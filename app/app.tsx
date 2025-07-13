import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store/index'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen/SplashScreen';
// import other screens as needed

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider 
      store={store}
    >
      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="SplashScreen"
        >
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
          {/* Add more screens here */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}