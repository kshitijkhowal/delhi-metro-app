import { Stop } from '../../types/gtfs.types';

export interface StationPickerScreenParams {
  onStationSelect?: (station: Stop) => void;
  title?: string;
  searchQuery?: string;
}

export interface StationPickerScreenProps {
  route: {
    params: StationPickerScreenParams;
  };
} 