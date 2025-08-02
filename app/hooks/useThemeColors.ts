import { Colors } from '@/app/constants/betterColors/betterColors';
import { ThemePaletteType } from '@/app/constants/betterColors/betterColors.d';
import { useAppSelector } from '@/app/redux/hook';
import { useMemo } from 'react';

export const useThemeColors = (): ThemePaletteType => {
  const theme = useAppSelector((state) => state.uiPreferences.theme);
  
  const colors = useMemo(() => {
    const resolvedTheme = theme === 'dark' ? 'dark' : 'light';
    return Colors[resolvedTheme];
  }, [theme]);
  
  return colors;
}; 