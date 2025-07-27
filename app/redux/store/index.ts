import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import generatedGraphsReducer from '../features/generatedGraphs/generatedGraphs';
import recentRoutesReducer from '../features/recentRoutes/recentRoutes';
import stopsReducer from '../features/stops/stops';
import uiPreferencesReducer from '../features/deviceConfig/uiPreferences';

const rootReducer = combineReducers({
  stops: stopsReducer,
  generatedGraphs: generatedGraphsReducer,
  recentRoutes: recentRoutesReducer,
  uiPreferences: uiPreferencesReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['stops', 'generatedGraphs', 'recentRoutes', 'uiPreferences'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
