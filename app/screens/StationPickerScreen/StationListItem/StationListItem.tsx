import React from 'react';
import { FlatList, Text, View } from 'react-native';
import AppView from '../../../components/AppView';
import LineColorChip from '../../../components/LineColorChip/LineColorChip';
import { Stop } from '../../../types/gtfs.types';
import * as styles from './styles';
import { Dimensions } from '@/app/constants/dimensions/dimensions';

export interface StationListItemProps {
  stop: Stop;
  onPress: (stop: Stop) => void;
}

const StationListItem: React.FC<StationListItemProps> = ({ stop, onPress }) => {
  return (
    <AppView style={styles.styles.container} onPress={() => onPress(stop)} elevation={{ enabled: true }}>
      <Text style={styles.styles.stationName}>{stop.stop_name}</Text>
      {stop.hindi_name && <Text style={styles.styles.hindiName}>{stop.hindi_name}</Text>}
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
