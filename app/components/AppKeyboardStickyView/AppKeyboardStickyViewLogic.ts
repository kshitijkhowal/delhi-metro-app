import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Platform } from 'react-native';

export interface KeyboardStickyViewOffset {
  closed: number;
  opened: number;
}

export const useAppKeyboardStickyViewLogic = (): KeyboardStickyViewOffset => {
  const insets = useSafeAreaInsets();

  const getOffset = (): KeyboardStickyViewOffset => {
    if (Platform.OS === 'android') {
      // For Android, subtract the bottom inset in the opened state
      return {
        closed: 0,
        opened: insets.bottom
      };
    } else {
      // For iOS, use the bottom inset as is
      return {
        closed: 0,
        opened: 0
      };
    }
  };

  return getOffset();
};