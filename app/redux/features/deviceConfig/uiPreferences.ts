import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Theme = 'light' | 'dark';
type FontSize = 'small' | 'medium' | 'large';

interface UiPreferencesState {
  theme: Theme;
  fontSize: FontSize;
  animationsEnabled: boolean;
  hapticsEnabled: boolean;
}

const initialState: UiPreferencesState = {
  theme: 'dark',
  fontSize: 'medium',
  animationsEnabled: true,
  hapticsEnabled: true,
};

const uiPreferencesSlice = createSlice({
  name: 'uiPreferences',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<Theme>) {
      state.theme = action.payload;
    },
    setFontSize(state, action: PayloadAction<FontSize>) {
      state.fontSize = action.payload;
    },
    toggleAnimations(state) {
      state.animationsEnabled = !state.animationsEnabled;
    },
    toggleHaptics(state) {
      state.hapticsEnabled = !state.hapticsEnabled;
    },
  },
});

export const {
  setTheme,
  setFontSize,
  toggleAnimations,
  toggleHaptics,
} = uiPreferencesSlice.actions;

export default uiPreferencesSlice.reducer;
