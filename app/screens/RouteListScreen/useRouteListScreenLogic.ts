import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useMemo, useState } from 'react';
import { RootStackParamList } from '../../navigation/types';
import { useAppSelector } from '../../redux/hook';
import { Stop } from '../../types/gtfs.types';
import { bfs } from '../../utils/Algorithms/bfs';
import { RouteListScreenParams } from './types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function useRouteListScreenLogic(route: { params: RouteListScreenParams }) {
  const navigation = useNavigation<NavigationProp>();
  const { weightedGraph } = useAppSelector(state => state.generatedGraphs);
  const { stops } = useAppSelector(state => state.stops);
  const [routeSegments, setRouteSegments] = useState<Stop[]>([]);
  const [totalDuration, setTotalDuration] = useState<number>(0);
  const [totalStops, setTotalStops] = useState<number>(0);
  const [loading, setLoading] = useState(true);


  const { fromStation, toStation } = route.params;

  // Convert weightedGraph from Redux format back to Map
  const graphMap = useMemo(() => {
    const map = new Map<string, Map<string, number>>();
    Object.entries(weightedGraph).forEach(([from, neighbors]) => {
      const neighborMap = new Map<string, number>();
      Object.entries(neighbors).forEach(([to, weight]) => {
        neighborMap.set(to, weight);
      });
      map.set(from, neighborMap);
    });
    return map;
  }, [weightedGraph]);

  // Find route using Dijkstra's algorithm
  useEffect(() => {
    if (Object.keys(weightedGraph).length === 0) {
      setLoading(false);
      return;
    }

    setLoading(true);

    try {
      const path = bfs(
        graphMap,
        String(fromStation.stop_id),
        String(toStation.stop_id)
      );

      if (path) {
        const stopsPath: Stop[] = path
          .map(stop_id => stops.find(stop => String(stop.stop_id) === stop_id))
          .filter((s): s is Stop => !!s);

        setRouteSegments(stopsPath);
        setTotalDuration(stopsPath.length);
        setTotalStops(stopsPath.length);
      } else {
        setRouteSegments([]);
        setTotalDuration(0);
        setTotalStops(0);
      }
    } catch (error) {
      console.error('Error finding route:', error);
      setRouteSegments([]);
      setTotalDuration(0);
    } finally {
      setLoading(false);
    }
  }, [fromStation, toStation, graphMap, stops, weightedGraph]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  const formatDuration = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
      return `${hours}h ${minutes}m`;
    }
    return `${minutes}m`;
  };

  return {
    routeSegments,
    totalDuration,
    totalStops,
    loading,
    handleBackPress,
    formatDuration,
    fromStation,
    toStation,
  };
}
