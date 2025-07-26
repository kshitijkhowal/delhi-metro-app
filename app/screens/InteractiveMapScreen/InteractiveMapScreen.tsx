import React from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { Stop } from '@/app/types/gtfs.types';
import { useAppSelector } from '@/app/redux/hook';
interface StationMapProps {
  stops: Stop[];
}

const InteractiveMapScreen: React.FC<StationMapProps> = () => {

    const { stops } = useAppSelector(state => state.stops);
    // Normalize lat/lng into a grid system (for simplicity)
  const normalizeStops = () => {
    const minLat = Math.min(...stops.map(s => s.stop_lat));
    const maxLat = Math.max(...stops.map(s => s.stop_lat));
    const minLng = Math.min(...stops.map(s => s.stop_lon));
    const maxLng = Math.max(...stops.map(s => s.stop_lon));

    return stops.map(stop => {
      const x = ((stop.stop_lon - minLng) / (maxLng - minLng)) * 100;
      const y = ((stop.stop_lat - minLat) / (maxLat - minLat)) * 100;
      return { ...stop, x, y };
    });
  };

  const normalizedStops = normalizeStops();

  return (
    <ScrollView horizontal contentContainerStyle={styles.scrollView}>
      <ScrollView contentContainerStyle={styles.mapContainer}>
        {normalizedStops.map((stop, index) => (
          <View
            key={index}
            style={[
              styles.station,
              {
                left: `${stop.x}%`,
                top: `${stop.y}%`,
              },
            ]}>
            <View style={[styles.circle]} />
            <Text style={styles.label}>{stop.stop_name}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
    minWidth: Dimensions.get('window').width * 2,
  },
  mapContainer: {
    flexGrow: 1,
    minHeight: Dimensions.get('window').height * 2,
    position: 'relative',
  },
  station: {
    position: 'absolute',
    alignItems: 'center',
  },
  circle: {
    width: 16,
    height: 16,
    backgroundColor: 'blue',
    borderRadius: 8,
    marginBottom: 4,
  },
  label: {
    fontSize: 10,
    textAlign: 'center',
  },
});

export default InteractiveMapScreen;
