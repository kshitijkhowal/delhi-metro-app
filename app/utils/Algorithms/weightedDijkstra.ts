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

    // Only check transfer for stations that are not at the ends
    if (i > 0 && i < path.length - 1) {
      const prevStop = path[i - 1];
      const nextStop = path[i + 1];

      const linesFromPrev = prevStop.lines ?? [];
      const linesCurrent = stop.lines ?? [];
      const linesNext = nextStop.lines ?? [];

      const sharedWithPrev = linesFromPrev.filter(line => linesCurrent.includes(line));
      const sharedWithNext = linesNext.filter(line => linesCurrent.includes(line));

      const continuesOnSameLine = sharedWithPrev.some(line => sharedWithNext.includes(line));

      isTransfer = !continuesOnSameLine;
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

