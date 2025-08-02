import {
  BackgroundColors,
  BorderColors,
  StatusColors,
  TextColors,
  ThemeColors
} from './betterColors';
  
  type ValueOf<T> = T[keyof T];
  
  export type ThemeColorType = ValueOf<typeof ThemeColors>;
  export type StatusColorType = ValueOf<typeof StatusColors>;
  export type TextColorType = ValueOf<typeof TextColors>;
  export type BackgroundColorType = ValueOf<typeof BackgroundColors>;
  export type BorderColorType = ValueOf<typeof BorderColors>;
  
  export type ThemePaletteType = {
    theme: {
      primary: string;
      secondary: string;
    };
    status: {
      success: string;
      warning: string;
      error: string;
      inactive: string;
      pending: string;
    };
    text: {
      primary: string;
      secondary: string;
    };
    background: {
      primary: string;
      secondary: string;
    };
    View: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
    border: {
      primary: string;
      secondary: string;
    };
  };
  
  export type ColorsType = {
    light: ThemePaletteType;
    dark: ThemePaletteType;
    getThemeColors: (theme: 'light' | 'dark') => ThemePaletteType;
  };
  
  export type ColorType =
    | ThemeColorType
    | StatusColorType
    | TextColorType
    | BackgroundColorType
    | BorderColorType;  