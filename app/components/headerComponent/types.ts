import React from 'react';

export interface HeaderIconMapItem {
  imageFile?: React.ReactNode;
  image?: any;
  rightText?: string;
  color?: string;
  badge?: string;
  onPress?: () => void;
}

export interface HeaderComponentProps {
  values: {
    title: string;
    subTitle?: string;
  };
  actions?: {
    onLeftPress?: () => void;
  };
  iconMap: HeaderIconMapItem[];
  style?: object;
  transparent?: boolean;
  onLayout?: () => void;
  noBackButton?: boolean;
  theme?: 'secondary' | 'primary';
  // Search bar props
  enableSearch?: boolean;
  onSearchChange?: (text: string) => void;
  onSearchOpen?: () => void;
  onSearchClose?: () => void;
  searchPlaceholder?: string;
  searchValue?: string;
}
