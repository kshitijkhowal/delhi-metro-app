import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useMemo, useState } from 'react';
import { RootStackParamList } from '../../navigation/types';
import { useAppSelector } from '../../redux/hook';
import { RouteListScreenParams, RouteSegment } from './types';

type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

interface DijkstraResult {
  path: string[];
  distance: number;
}

// Dijkstra's algorithm implementation
function dijkstra(
  graph: Map<string, Map<string, number>>,
  start: string,
  end: string
): DijkstraResult | null {
  const distances = new Map<string, number>();
  const previous = new Map<string, string | null>();
  const visited = new Set<string>();
  const queue: string[] = [];

  // Initialize distances
  for (const node of graph.keys()) {
    distances.set(node, Infinity);
    queue.push(node);
  }
  distances.set(start, 0);

  while (queue.length > 0) {
    // Find node with minimum distance
    let minNode = queue[0];
    let minDistance = distances.get(minNode) || Infinity;
    
    for (const node of queue) {
      const distance = distances.get(node) || Infinity;
      if (distance < minDistance) {
        minDistance = distance;
        minNode = node;
      }
    }

    if (minDistance === Infinity) break;

    // Remove from queue
    const index = queue.indexOf(minNode);
    queue.splice(index, 1);
    visited.add(minNode);

    // If we reached the destination
    if (minNode === end) break;

    // Update distances to neighbors
    const neighbors = graph.get(minNode);
    if (neighbors) {
      for (const [neighbor, weight] of neighbors) {
        if (!visited.has(neighbor)) {
          const newDistance = minDistance + weight;
          const currentDistance = distances.get(neighbor) || Infinity;
          
          if (newDistance < currentDistance) {
            distances.set(neighbor, newDistance);
            previous.set(neighbor, minNode);
          }
        }
      }
    }
  }

  // Reconstruct path
  const path: string[] = [];
  let current: string | null = end;
  
  while (current !== null) {
    path.unshift(current);
    const prev = previous.get(current);
    current = prev !== undefined ? prev : null;
  }

  const finalDistance = distances.get(end);
  if (finalDistance === Infinity || finalDistance === undefined) {
    return null;
  }

  return {
    path,
    distance: finalDistance,
  };
}

export function useRouteListScreenLogic(route: { params: RouteListScreenParams }) {
  const navigation = useNavigation<NavigationProp>();
  const { weightedGraph } = useAppSelector(state => state.generatedGraphs);
  const { stops } = useAppSelector(state => state.stops);
  const [routeSegments, setRouteSegments] = useState<RouteSegment[]>([]);
  const [totalDuration, setTotalDuration] = useState<number>(0);
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
      const result = dijkstra(
        graphMap,
        String(fromStation.stop_id),
        String(toStation.stop_id)
      );

      if (result) {
        // Convert path to route segments
        const segments: RouteSegment[] = [];
        for (let i = 0; i < result.path.length - 1; i++) {
          const fromStopId = result.path[i];
          const toStopId = result.path[i + 1];
          
          const fromStop = stops.find(s => String(s.stop_id) === fromStopId);
          const toStop = stops.find(s => String(s.stop_id) === toStopId);
          
          if (fromStop && toStop) {
            const duration = graphMap.get(fromStopId)?.get(toStopId) || 0;
            segments.push({
              fromStop,
              toStop,
              lineColors: [], // TODO: Get line colors from graph data
              duration,
            });
          }
        }
        
        setRouteSegments(segments);
        setTotalDuration(result.distance);
      } else {
        setRouteSegments([]);
        setTotalDuration(0);
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
    loading,
    handleBackPress,
    formatDuration,
    fromStation,
    toStation,
  };
}
