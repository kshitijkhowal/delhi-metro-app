import { MetroLineColorsMap } from '../../types/color.types';

export const ThemeColors = {
    primary: {
      default: '#473391',
      dark: '#6147FF',
      light: '#885FEC',
      lighter: '#F7F4FF',
      90: '#473391DD',
      60: '#47339160',
      20: '#6147FF',
      10: '#47339110',
    },
    secondary: '#473391',
    gold: '#FFD700',
  } as const;
  
  // Status Colors
  export const StatusColors = {
    success: '#1AC18F',
    warning: {
      default: '#F6EAB6',
      dark: '#FFC022',
    },
    error: {
      default: '#FF6461',
      light: '#FF646110',
    },
    inactive: '#EADCDC',
    pending: '#FFB639',
  } as const;
  
  // Light Theme Colors
  export const LightThemeColors = {
    text: {
      primary: '#000000',
      secondary: 'rgba(0, 0, 0, 0.6)',
      tertiary: 'rgba(0, 0, 0, 0.4)',
      disabled: 'rgba(0, 0, 0, 0.25)',
      inverse: '#ffffff',
      placeholder: '#bbbbbb',
      error: '#C5270E',
    },
    background: {
      primary: '#ffffff',
      secondary: '#F5F5F5',
      tertiary: '#EBF5FF',
      card: '#ffffff',
      search: '#EBF5FF',
      profile: '#BAC9FF',
      warning: '#FFF3F1',
      earn: '#FBF5E0',
      avatar: '#BAC9FF',
      tag: '#EAE7FF',
    },
    border: {
      primary: 'rgba(0, 0, 0, 0.12)',
      secondary: '#ECECEC',
      divider: 'rgba(0, 0, 0, 0.12)',
      input: 'rgba(0, 0, 0, 0.12)',
    },
  } as const;

  // Dark Theme Colors
  export const DarkThemeColors = {
    text: {
      primary: '#ffffff',
      secondary: 'rgba(255, 255, 255, 0.8)',
      tertiary: 'rgba(255, 255, 255, 0.6)',
      disabled: 'rgba(255, 255, 255, 0.4)',
      inverse: '#000000',
      placeholder: '#888888',
      error: '#FF6461',
    },
    background: {
      primary: '#121212',
      secondary: '#1E1E1E',
      tertiary: '#2D2D2D',
      card: '#1E1E1E',
      search: '#2D2D2D',
      profile: '#2D2D2D',
      warning: '#2D2D2D',
      earn: '#2D2D2D',
      avatar: '#2D2D2D',
      tag: '#2D2D2D',
    },
    border: {
      primary: 'rgba(255, 255, 255, 0.12)',
      secondary: '#2D2D2D',
      divider: 'rgba(255, 255, 255, 0.12)',
      input: 'rgba(255, 255, 255, 0.12)',
    },
  } as const;
  
  // Overlay Colors
  export const OverlayColors = {
    dark: {
      80: 'rgba(0, 0, 0, 0.8)',
      60: 'rgba(0, 0, 0, 0.6)',
      40: 'rgba(0, 0, 0, 0.4)',
      20: 'rgba(0, 0, 0, 0.2)',
    },
    light: {
      80: 'rgba(255, 255, 255, 0.8)',
      60: 'rgba(255, 255, 255, 0.7)',
      40: 'rgba(255, 255, 255, 0.45)',
      20: 'rgba(255, 255, 255, 0.25)',
    },
    transparent: '#00000000',
  } as const;
  
  // Accent Colors
  export const AccentColors = {
    blue: '#B5EEFF',
    orange: '#FF8060',
    gold: '#FFF1D6',
  } as const;
  
  // Metro Line Colors
  export const MetroLineColors = {
    red: '#D32F2F',
    blue: '#1976D2',
    yellow: '#FBC02D',
    green: '#388E3C',
    pink: '#C2185B',
    magenta: '#8E24AA',
    orange: '#F57C00',
    violet: '#7B1FA2',
    grey: '#9E9E9E',
    airport_express: '#004D40',
  } as const;
  
  // Master Export
  export const Colors = {
    theme: ThemeColors,
    status: StatusColors,
    text: LightThemeColors.text, // Default to light theme
    background: LightThemeColors.background, // Default to light theme
    border: LightThemeColors.border, // Default to light theme
    overlay: OverlayColors,
    accent: AccentColors,
    metro: MetroLineColors,
} as const;

// Theme-aware colors function
export const getThemeColors = (theme: 'light' | 'dark') => {
  const themeColors = theme === 'dark' ? DarkThemeColors : LightThemeColors;
  
  return {
    theme: ThemeColors,
    status: StatusColors,
    text: themeColors.text,
    background: themeColors.background,
    border: themeColors.border,
    overlay: OverlayColors,
    accent: AccentColors,
    metro: MetroLineColors,
  } as const;
};

export const metroLineColorsMap: MetroLineColorsMap = {
  Red: { id: 'Red', displayName: 'Red Line', color: '#D32F2F' },
  Pink: { id: 'Pink', displayName: 'Pink Line', color: '#C2185B' },
  Yellow: { id: 'Yellow', displayName: 'Yellow Line', color: '#FBC02D' },
  Violet: { id: 'Violet', displayName: 'Violet Line', color: '#7B1FA2' },
  Green: { id: 'Green', displayName: 'Green Line', color: '#388E3C' },
  Blue: { id: 'Blue', displayName: 'Blue Line', color: '#1976D2' },
  Orange: { id: 'Orange', displayName: 'Orange Line', color: '#F57C00' },
  Magenta: { id: 'Magenta', displayName: 'Magenta Line', color: '#8E24AA' },
  Aqua: { id: 'Aqua', displayName: 'Aqua Line', color: '#00BCD4' }, // Picked a standard aqua color
  Grey: { id: 'Grey', displayName: 'Grey Line', color: 'grey' }, // Picked a standard aqua color
  Rapid_Metro: { id: 'Rapid_Metro', displayName: 'Rapid Metro Line', color: '#00008B' }, // Picked a standard aqua color
};
  