import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useMemo, useState } from 'react';
import { RootStackParamList } from '../../navigation/types';
import { useAppSelector } from '../../redux/hook';
import { weightedDijkstra, WeightedDijkstraResult } from '../../utils/Algorithms/weightedDijkstra';
import { RouteHeaderComponentProps, RouteHeaderData, RouteListScreenParams, RouteSegment } from './RouteListScreen.Types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export function useRouteListScreenLogic(route: { params: RouteListScreenParams }) {
  const navigation = useNavigation<NavigationProp>();
  const { weightedGraph } = useAppSelector(state => state.generatedGraphs);
  const { stops } = useAppSelector(state => state.stops);
  const [routeSegments, setRouteSegments] = useState<RouteSegment[]>([]);
  const [headerData, setHeaderData] = useState<RouteHeaderData | null>(null);
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
      const result: WeightedDijkstraResult | null = weightedDijkstra(
        graphMap,
        stops,
        String(fromStation.stop_id),
        String(toStation.stop_id)
      );

      if (result) {
        setRouteSegments(result.segments);
        setHeaderData({
          fromStation,
          toStation,
          totalDuration: result.totalDuration,
          totalSegments: result.path.length,
          totalInterchanges: result.totalInterchanges
        }) 
      } else {
        setRouteSegments([]);
      }
    } catch (error) {
      console.error('Error finding route:', error);
      setRouteSegments([]);
    } finally {
      setLoading(false);
    }
  }, [fromStation, toStation, graphMap, stops, weightedGraph]);

  const handleBackPress = () => {
    navigation.goBack();
  };

  return {
    routeSegments,
    loading,
    handleBackPress,
    headerData,
  };
}
