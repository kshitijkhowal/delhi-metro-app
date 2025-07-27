import { Colors } from '@/app/constants/betterColors/betterColors';
import { useAppSelector } from '@/app/redux/hook';

export const useThemeColors = () => {
  const theme = useAppSelector((state) => state.uiPreferences.theme);
  // For now, resolve 'system' to 'light'. You can enhance this with Appearance API if needed.
  const resolvedTheme = theme === 'dark' ? 'dark' : 'light';
  return Colors[resolvedTheme];
}; 