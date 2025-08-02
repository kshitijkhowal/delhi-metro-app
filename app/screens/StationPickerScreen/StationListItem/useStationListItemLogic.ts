import { useThemeColors } from '@/app/hooks/useThemeColors';

export const useStationListItemLogic = () => {
  const colors = useThemeColors();
  
  return {
    colors,
  };
};
