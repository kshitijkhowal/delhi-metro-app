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
    theme: typeof ThemeColors;
    status: typeof StatusColors;
    text: typeof TextColors;
    background: typeof BackgroundColors;
    border: typeof BorderColors;
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