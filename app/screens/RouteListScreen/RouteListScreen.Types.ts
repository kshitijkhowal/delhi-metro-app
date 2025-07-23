import { Stop } from '../../types/gtfs.types';

export interface RouteListScreenParams {
  fromStation: Stop;
  toStation: Stop;
}

export interface RouteSegment {
  stop: Stop;              // The stop at this segment
  timeToReach: Number;     // Cumulative time to reach this stop
  isTransfer: boolean;     // True if this stop is a transfer from previous segment
  towards: string | null;  // TODO: direction/towards info
}

export interface RouteListScreenProps {
  route: {
    params: RouteListScreenParams;
  };
} 