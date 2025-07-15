export function bfs(
  graph: Map<string, Map<string, number>>,
  start: string,
  end: string
): string[] | null {
  const queue: string[][] = [[start]];
  const visited = new Set<string>([start]);

  while (queue.length > 0) {
    const path = queue.shift()!;
    const node = path[path.length - 1];
    if (node === end) return path;
    const neighbors = graph.get(node);
    if (neighbors) {
      for (const neighbor of neighbors.keys()) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push([...path, neighbor]);
        }
      }
    }
  }
  return null;
}
