import { useThemeColors } from '@/app/hooks/useThemeColors';
import React from 'react';
import { Text, View } from 'react-native';
import { metroLineColorsMap } from '../../constants/colors/colors';
import { styles } from './styles';
import { useLineColorChipLogic } from './useLineColorChipLogic';

export interface LineColorChipProps {
  line: keyof typeof metroLineColorsMap;
}

const LineColorChip: React.FC<LineColorChipProps> = ({ line }) => {
  const colors = useThemeColors();
  const { borderColor, backgroundColor, displayName } = useLineColorChipLogic(line);

  return (
    <View style={[styles.chip, { borderColor, backgroundColor }]}> 
      <Text style={[styles.chipText, { color: colors.text.primary }]}>{displayName}</Text>
    </View>
  );
};

export default LineColorChip;
