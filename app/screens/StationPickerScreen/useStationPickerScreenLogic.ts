import { useThemeColors } from '@/app/hooks/useThemeColors';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import type { SearchBarImperativeHandler } from '../../components/SearchBar';
import { useAppSelector } from '../../redux/hook';
import { Stop } from '../../types/gtfs.types';
import { StationPickerScreenParams } from './StationPickerScreen.Types';

export function useStationPickerScreenLogic(route: { params: StationPickerScreenParams }) {
  const navigation = useNavigation();
  const colors = useThemeColors();
  const { stops } = useAppSelector(state => state.stops);
  const [searchQuery, setSearchQuery] = useState(route.params.searchQuery || '');
  
  // SearchBar imperative handler ref
  const searchBarRef = useRef<SearchBarImperativeHandler>(null);

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

  const handleSearchChange = useCallback((text: string) => {
    setSearchQuery(text);
  }, []);

  const handleSearchSubmit = useCallback((text: string) => {
    setSearchQuery(text);
    // Optionally focus the search bar after submission
    searchBarRef.current?.focus();
  }, []);

  const handleSearchClear = useCallback(() => {
    setSearchQuery('');
    // Focus the search bar after clearing
    searchBarRef.current?.focus();
  }, []);

  // Focus search bar when screen mounts
  useEffect(() => {
    const timer = setTimeout(() => {
      searchBarRef.current?.focus();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return {
    colors,
    searchQuery,
    setSearchQuery,
    filteredStops,
    handleStationSelect,
    handleBackPress,
    handleSearchChange,
    handleSearchSubmit,
    handleSearchClear,
    searchBarRef,
    title: route.params.title || 'Select Station',
  };
}
