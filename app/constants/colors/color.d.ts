import {
    ThemeColors,
    StatusColors,
    TextColors,
    BackgroundColors,
    BorderColors,
    OverlayColors,
    AccentColors,
    MetroLineColors,
  } from './colors';
  
  type ValueOf<T> = T[keyof T];
  
  export type ThemeColorType = ValueOf<typeof ThemeColors>;
  export type StatusColorType = ValueOf<typeof StatusColors>;
  export type TextColorType = ValueOf<typeof TextColors>;
  export type BackgroundColorType = ValueOf<typeof BackgroundColors>;
  export type BorderColorType = ValueOf<typeof BorderColors>;
  export type OverlayColorType = ValueOf<typeof OverlayColors>;
  export type AccentColorType = ValueOf<typeof AccentColors>;
  export type MetroLineColorType = ValueOf<typeof MetroLineColors>;
  
  export type ColorType =
    | ThemeColorType
    | StatusColorType
    | TextColorType
    | BackgroundColorType
    | BorderColorType
    | OverlayColorType
    | AccentColorType
    | MetroLineColorType;
  