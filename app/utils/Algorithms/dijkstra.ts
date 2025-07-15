export interface DijkstraResult {
  path: string[];
  distance: number;
}

export function dijkstra(
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
  }
  distances.set(start, 0);
  queue.push(start);

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
            queue.push(neighbor); // Add neighbor to queue if it's not already there
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
