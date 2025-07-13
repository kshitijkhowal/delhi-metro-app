import { useNavigation } from '@react-navigation/native';
import { useMemo, useState } from 'react';
import { useAppSelector } from '../../redux/hook';
import { Stop } from '../../types/gtfs.types';
import { StationPickerScreenParams } from './types';

export function useStationPickerScreenLogic(route: { params: StationPickerScreenParams }) {
  const navigation = useNavigation();
  const { stops } = useAppSelector(state => state.stops);

  console.log('[stopssss]', stops)
  const [searchQuery, setSearchQuery] = useState('');

  const filteredStops = useMemo(() => {
    if (!searchQuery.trim()) {
      return stops;
    }
    
    return stops.filter(stop => 
      stop.stop_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      stop.stop_code?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [stops, searchQuery]);

  const handleStationSelect = (station: Stop) => {
    if (route.params.onStationSelect) {
      route.params.onStationSelect(station);
    }
    navigation.goBack();
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return {
    searchQuery,
    setSearchQuery,
    filteredStops,
    handleStationSelect,
    handleBackPress,
    title: route.params.title || 'Select Station',
  };
}
