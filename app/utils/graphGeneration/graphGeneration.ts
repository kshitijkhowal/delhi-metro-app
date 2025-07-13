
import stopTimes from '../../data/gtfsJSON/stop_times.json';
import stops from '../../data/gtfsJSON/stops.json';
import { Stop, StopTime } from '../../types/gtfs.types';

// Type for the graph: adjacency list
export type Graph = Map<string, Set<string>>;
export type WeightedGraph = Map<string, Map<string, number>>; // from stop_id -> to stop_id -> weight (seconds)

function parseTimeToSeconds(time: string): number {
  if (!time) return 0;
  const [h, m, s] = time.split(':').map(Number);
  return h * 3600 + m * 60 + (s || 0);
}

const graphGeneration = () => {
  // Step 1: Build a map of stop details
  const stopMap = new Map<string, Stop>();
  (stops as any[]).forEach((stop) => {
    stopMap.set(String(stop.stop_id), {
      ...stop,
      stop_id: String(stop.stop_id),
      stop_name: String(stop.stop_name),
      stop_lat: Number(stop.stop_lat),
      stop_lon: Number(stop.stop_lon),
    });
  });

  // Step 2: Group stop_times by trip_id and sort by stop_sequence
  const tripMap = new Map<string, StopTime[]>();
  (stopTimes as any[]).forEach((st) => {
    const tripId = String(st.trip_id);
    const stopId = String(st.stop_id);
    const stopSequence = Number(st.stop_sequence);
    const stopTime: StopTime = {
      ...st,
      trip_id: tripId,
      stop_id: stopId,
      stop_sequence: stopSequence,
    };
    if (!tripMap.has(tripId)) {
      tripMap.set(tripId, []);
    }
    tripMap.get(tripId)!.push(stopTime);
  });
  // Sort each trip's stops by sequence
  tripMap.forEach((arr) => {
    arr.sort((a, b) => a.stop_sequence - b.stop_sequence);
  });

  // Step 3: Build the unweighted graph (adjacency list)
  const metroGraph: Graph = new Map();
  tripMap.forEach((stopList) => {
    for (let i = 0; i < stopList.length - 1; i++) {
      const from = String(stopList[i].stop_id);
      const to = String(stopList[i + 1].stop_id);

      if (!metroGraph.has(from)) metroGraph.set(from, new Set());
      metroGraph.get(from)!.add(to);

      // Optional: make graph undirected
      if (!metroGraph.has(to)) metroGraph.set(to, new Set());
      metroGraph.get(to)!.add(from);
    }
  });

  // Step 4: Build the weighted graph (using travel time as weight)
  const weightedGraph: WeightedGraph = new Map();
  tripMap.forEach((stopList) => {
    for (let i = 0; i < stopList.length - 1; i++) {
      const from = String(stopList[i].stop_id);
      const to = String(stopList[i + 1].stop_id);
      const depTime = parseTimeToSeconds(stopList[i].departure_time ?? "");
      const arrTime = parseTimeToSeconds(stopList[i + 1].arrival_time ?? "");
      const weight = arrTime - depTime;
      if (!weightedGraph.has(from)) weightedGraph.set(from, new Map());
      weightedGraph.get(from)!.set(to, weight);

      if (!weightedGraph.has(to)) weightedGraph.set(to, new Map());
      weightedGraph.get(to)!.set(from, weight);
    }
  });

  return { stopMap, tripMap, metroGraph, weightedGraph };
};

export default graphGeneration;