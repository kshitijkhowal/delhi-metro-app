import { useThemeColors } from '@/app/hooks/useThemeColors';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useMemo, useState } from 'react';
import { useAppSelector } from '../../redux/hook';
import { Stop } from '../../types/gtfs.types';
import { StationPickerScreenParams } from './StationPickerScreen.Types';

export function useStationPickerScreenLogic(route: { params: StationPickerScreenParams }) {
  const navigation = useNavigation();
  const colors = useThemeColors();
  const { stops } = useAppSelector(state => state.stops);
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

  useEffect(() => {

  },[])

  return {
    colors,
    searchQuery,
    setSearchQuery,
    filteredStops,
    handleStationSelect,
    handleBackPress,
    title: route.params.title || 'Select Station',
  };
}
