import { Stop } from '../../types/gtfs.types';

export interface RouteListScreenParams {
  fromStation: Stop;
  toStation: Stop;
}

export interface RouteSegment {
  fromStop: Stop;
  toStop: Stop;
  lineColors: string[];
  duration: number; // in seconds
}

export interface RouteListScreenProps {
  route: {
    params: RouteListScreenParams;
  };
} 