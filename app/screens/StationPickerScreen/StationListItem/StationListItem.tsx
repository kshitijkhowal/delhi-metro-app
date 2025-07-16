import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { metroLineColorsMap } from '../../../constants/colors/colors';
import { Stop } from '../../../types/gtfs.types';
import * as styles from './styles';

export interface StationListItemProps {
  stop: Stop;
  onPress: (stop: Stop) => void;
}

const StationListItem: React.FC<StationListItemProps> = ({ stop, onPress }) => {
  return (
    <TouchableOpacity style={styles.styles.container} onPress={() => onPress(stop)} activeOpacity={0.7}>
      <View style={styles.styles.infoContainer}>
        <Text style={styles.styles.stationName}>{stop.stop_name}</Text>
        {stop.hindi_name && <Text style={styles.styles.hindiName}>{stop.hindi_name}</Text>}
        {stop.stop_id && <Text style={styles.styles.stationCode}>Code: {stop.stop_id}</Text>}
      </View>
      <View style={styles.styles.linesContainer}>
        {stop.lines?.map((line) => {
          const lineColor = metroLineColorsMap[line];
          return (
            <View key={line} style={[styles.styles.lineChip, { backgroundColor: lineColor?.color ?? 'black' }]}> 
              <Text style={styles.styles.lineChipText}>{lineColor?.displayName ?? 'helloooo'}</Text>
            </View>
          );
        })}
      </View>
    </TouchableOpacity>
  );
};

export default StationListItem;
