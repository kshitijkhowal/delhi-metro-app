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
  
  // Text Colors
  export const TextColors = {
    primary: '#000000',
    secondary: 'rgba(0, 0, 0, 0.6)',
    tertiary: 'rgba(0, 0, 0, 0.4)',
    disabled: 'rgba(0, 0, 0, 0.25)',
    inverse: '#ffffff',
    placeholder: '#bbbbbb',
    error: '#C5270E',
  } as const;
  
  // Background Colors
  export const BackgroundColors = {
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
  } as const;
  
  // Border Colors
  export const BorderColors = {
    primary: 'rgba(0, 0, 0, 0.12)',
    secondary: '#ECECEC',
    divider: 'rgba(0, 0, 0, 0.12)',
    input: 'rgba(0, 0, 0, 0.12)',
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
    text: TextColors,
    background: BackgroundColors,
    border: BorderColors,
    overlay: OverlayColors,
    accent: AccentColors,
    metro: MetroLineColors,
} as const;

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
  