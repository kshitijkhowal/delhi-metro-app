import React from 'react';
import type BackArrowIcon from '../../assets/icons/arrowIcons/backArrowIcon';

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
  theme?: 'white' | 'primary';
}
