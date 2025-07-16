import { metroLineColorsMap } from '@/app/constants/colors/colors';
import React from 'react';
import { Text, View } from 'react-native';
import AppView from '../../../components/AppView';
import { Stop } from '../../../types/gtfs.types';
import {styles} from './styles';

export interface StationListItemProps {
  stop: Stop;
  onPress: (stop: Stop) => void;
}

const StationListItem: React.FC<StationListItemProps> = ({ stop, onPress }) => {
  return (
    <AppView
      onPress={() => onPress(stop)}
      style={styles.container}
      elevation={{ enabled: true }}
    >
      <View style={[styles.infoContainer]}>
        <Text style={styles.stationName}>{stop.stop_name}</Text>
        {stop.hindi_name && <Text style={styles.hindiName}>{stop.hindi_name}</Text>}
        {stop.stop_id && <Text style={styles.stationCode}>Code: {stop.stop_id}</Text>}
      </View>
      <View style={styles.linesContainer}>
        {stop.lines?.map((line) => {
          const lineColor = metroLineColorsMap[line];
          return (
            <View key={line} style={[styles.lineChip, { backgroundColor: lineColor?.color ?? 'black' }]}> 
              <Text style={styles.lineChipText}>{lineColor?.displayName ?? 'helloooo'}</Text>
            </View>
          );
        })}
      </View>
    </AppView>
  );
};

export default StationListItem;
