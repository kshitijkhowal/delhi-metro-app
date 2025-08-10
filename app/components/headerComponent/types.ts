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
  leftIcon?: HeaderIconMapItem;
  style?: object;
  transparent?: boolean;
  onLayout?: () => void;
  noBackButton?: boolean;
}
