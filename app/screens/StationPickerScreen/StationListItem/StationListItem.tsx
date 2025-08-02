import { Dimensions } from '@/app/constants/dimensions/dimensions';
import { useThemeColors } from '@/app/hooks/useThemeColors';
import React from 'react';
import { FlatList, Text, View } from 'react-native';
import AppView from '../../../components/AppView';
import LineColorChip from '../../../components/LineColorChip/LineColorChip';
import { Stop } from '../../../types/gtfs.types';
import * as styles from './styles';

export interface StationListItemProps {
  stop: Stop;
  onPress: (stop: Stop) => void;
}

const StationListItem: React.FC<StationListItemProps> = ({ stop, onPress }) => {
  const colors = useThemeColors();

  return (
    <AppView 
      style={[
        styles.styles.container, 
        { 
          backgroundColor: colors.View.primary,
        }
      ]} 
      onPress={() => onPress(stop)} 
      elevation={{ enabled: true }}
    >
      <Text style={[styles.styles.stationName, { color: colors.text.primary }]}>
        {stop.stop_name}
      </Text>
      {stop.hindi_name && (
        <Text style={[styles.styles.hindiName, { color: colors.text.secondary }]}>
          {stop.hindi_name}
        </Text>
      )}
      <View style={styles.styles.linesContainer}>
        <FlatList
          data={stop.lines}
          keyExtractor={(item) => item}
          renderItem={({ item }) => <LineColorChip line={item}/>}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ width: Dimensions.MARGIN.xxs }} />}
        />
      </View>
    </AppView>
  );
};

export default StationListItem;
