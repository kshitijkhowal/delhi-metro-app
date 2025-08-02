import { useThemeColors } from '@/app/hooks/useThemeColors';
import { useCallback, useState } from 'react';

export function useAppTextInputLogic() {
  const [isFocused, setIsFocused] = useState(false);
  const colors = useThemeColors();

  const handleFocus = useCallback(() => setIsFocused(true), []);
  const handleBlur = useCallback(() => setIsFocused(false), []);

  return {
    isFocused,
    handleFocus,
    handleBlur,
    colors,
  };
}
