import { MetroLineColorsMap } from '../../types/color.types';

export const ThemeColorsLight = {
  primary: '#473391',
  secondary: '#6147FF',
} as const;

export const ThemeColorsDark = {
  primary: '#1A1A2E',
  secondary: '#282846',
} as const;

// Status Colors
export const StatusColors = {
  success: '#1AC18F',
  warning: '#FFC022',
  error: '#FF6461',
  inactive: '#EADCDC',
  pending: '#FFB639',
} as const;

export const StatusColorsLight = StatusColors;
export const StatusColorsDark = {
  ...StatusColors,
  inactive: '#444444',
  pending: '#FFD700',
} as const;

// Text Colors
export const TextColors = {
  primary: '#000000',
  secondary: 'rgba(0, 0, 0, 0.6)',
} as const;

export const TextColorsLight = TextColors;
export const TextColorsDark = {
  primary: '#FFFFFF',
  secondary: 'rgba(255, 255, 255, 0.7)',
} as const;

// Background Colors
export const BackgroundColors = {
  primary: '#FFFFFF', // Whitest white
  secondary: '#F0F0F0', // Slightly darker than white
} as const;

export const BackgroundColorsLight = BackgroundColors;

export const BackgroundColorsDark = {
  primary: '#000000', // Blackest black
  secondary: '#1A1A1A', // Slightly lighter than black
} as const;
// View Colors
export const ViewColors = {
  primary: '#E8E8E8', // Darker white
  secondary: '#F0F0F0',
  tertiary: '#E0E0E0',
} as const;

export const ViewColorsLight = ViewColors;
export const ViewColorsDark = {
  primary: '#2A2A2A', // Lighter black
  secondary: '#333333',
  tertiary: '#404040',
} as const;

// Border Colors
export const BorderColors = {
  primary: 'rgba(0, 0, 0, 0.12)',
  secondary: '#ECECEC',
} as const;

export const BorderColorsLight = BorderColors;
export const BorderColorsDark = {
  primary: 'rgba(255, 255, 255, 0.12)',
  secondary: '#444444',
} as const;

// Master Export
export const Colors = {
  light: {
    theme: ThemeColorsLight,
    status: StatusColorsLight,
    text: TextColorsLight,
    background: BackgroundColorsLight,
    View: ViewColorsLight,
    border: BorderColorsLight,
  },
  dark: {
    theme: ThemeColorsDark,
    status: StatusColorsDark,
    text: TextColorsDark,
    background: BackgroundColorsDark,
    View: ViewColorsDark,
    border: BorderColorsDark,
  },
  getThemeColors: (theme: 'light' | 'dark') =>
    theme === 'dark' ? Colors.dark : Colors.light,
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
  Aqua: { id: 'Aqua', displayName: 'Aqua Line', color: '#00BCD4' },
  Grey: { id: 'Grey', displayName: 'Grey Line', color: 'grey' },
  Rapid_Metro: { id: 'Rapid_Metro', displayName: 'Rapid Metro Line', color: '#00008B' },
};

export { ThemeColorsLight as ThemeColors };
  