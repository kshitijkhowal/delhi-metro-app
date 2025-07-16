// Metro line color IDs
export type MetroLineColorId =
  | 'Red'
  | 'Pink'
  | 'Yellow'
  | 'Violet'
  | 'Green'
  | 'Blue'
  | 'Orange'
  | 'Magenta'
  | 'Aqua'
  | 'Grey'
  | 'Rapid_Metro';

export interface MetroLineColor {
  id: MetroLineColorId;
  displayName: string;
  color: string;
}

export type MetroLineColorsMap = Record<MetroLineColorId, MetroLineColor>;
