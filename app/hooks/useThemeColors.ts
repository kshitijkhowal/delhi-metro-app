import { Colors } from '@/app/constants/betterColors/betterColors';
import { useAppSelector } from '@/app/redux/hook';

export const useThemeColors = () => {
  const theme = useAppSelector((state) => state.uiPreferences.theme);
  const resolvedTheme = theme === 'dark' ? 'dark' : 'light';
  return Colors[resolvedTheme];
}; 