import { RouteSegment } from '../../screens/RouteListScreen/RouteListScreen.Types';
import { Stop } from '../../types/gtfs.types';

export interface WeightedDijkstraResult {
  path: Stop[];
  totalDuration: number;
  segments: RouteSegment[];
}

function reconstructPath(parent: number[], startIdx: number, endIdx: number): number[] {
  const pathIndices: number[] = [];
  let curr = endIdx;
  while (curr !== startIdx) {
    pathIndices.unshift(curr);
    curr = parent[curr];
    if (curr === -1) return [];
  }
  pathIndices.unshift(startIdx);
  return pathIndices;
}

function generateSegments(path: Stop[], distance: number[]): RouteSegment[] {
  const segments: RouteSegment[] = [];

  for (let i = 0; i < path.length; i++) {
    const stop = path[i];
    let isTransfer = false;

    if (i >= 2) {
      const prevStop = path[i - 1];
      const prevPrevStop = path[i - 2];

      const prevLines = prevPrevStop.lines ?? [];
      const currLines = prevStop.lines ?? [];
      const nextLines = stop.lines ?? [];

      // Get shared lines between prevPrev and prev
      const continuingLines = currLines.filter(line => prevLines.includes(line));

      // Check if current stop shares any of those continuing lines
      const continuesOnSameLine = continuingLines.some(line => nextLines.includes(line));

      isTransfer = !continuesOnSameLine;
    } else if (i === 1) {
      // Compare stop[0] and stop[1] for initial transfer check
      const sharedLines = (path[0].lines ?? []).filter(line =>
        (stop.lines ?? []).includes(line)
      );
      isTransfer = sharedLines.length === 0;
    }

    const segment: RouteSegment = {
      stop: stop,
      timeToReach: distance[Number(stop.stop_id)],
      isTransfer,
      towards: null,
    };

    segments.push(segment);
  }

  return segments;
}



export function weightedDijkstra(
  graph: Map<string, Map<string, number>>,
  stops: Stop[],
  start: string,
  end: string
): WeightedDijkstraResult | null {
  if (!start || !end) return null;

  const src = Number(start);
  const dest = Number(end);
  const totalStops = stops.length;

  const distance = Array(totalStops).fill(Infinity);
  const parent = Array(totalStops).fill(-1);
  const visited = Array(totalStops).fill(false);

  // Priority queue: [distance, nodeIndex]
  const pq: [number, number][] = [];

  distance[src] = 0;
  parent[src] = src;
  pq.push([0, src]);

  while (pq.length > 0) {
    // Get node with smallest distance
    pq.sort((a, b) => a[0] - b[0]);
    const [currDist, node] = pq.shift()!;

    if (visited[node]) continue;
    visited[node] = true;

    if (node === dest) break;

    const neighbors = graph.get(String(node));
    if (!neighbors) continue;

    for (const [neighborStr, weight] of neighbors.entries()) {
      const neighbor = Number(neighborStr);

      if (visited[neighbor]) continue;

      const newDist = distance[node] + weight;

      if (newDist < distance[neighbor]) {
        distance[neighbor] = newDist;
        parent[neighbor] = node;
        pq.push([newDist, neighbor]);
      }
    }
  }

  // If no path found
  if (distance[dest] === Infinity) return null;

  const pathIndices = reconstructPath(parent, src, dest);
  if (pathIndices.length === 0) return null;

  // Map path to Stop objects
  const path: Stop[] = pathIndices.map(index => stops[index - 1]);
  const totalDuration = distance[dest];
  const segments = generateSegments(path, distance);

  console.log(JSON.stringify(segments))

  return { path, totalDuration, segments };
}

