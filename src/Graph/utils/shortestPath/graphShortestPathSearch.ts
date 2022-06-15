import { Graph, GraphNode, GraphPath } from '../../Graph.types';

export function getNodeNeighbors(graph: Graph, node: string): string[] {
  return graph.reduce((neighborsResult, pair) => {
    if (pair.indexOf(node) === -1) return neighborsResult;

    const [firstNode, secondNode] = pair;

    return firstNode !== node ? [...neighborsResult, firstNode] : [...neighborsResult, secondNode];
  }, [] as GraphNode[]);
}

function reduceLongPaths(paths: GraphPath[]) {
  const shortestLength = paths.reduce((result, path) => {
    return result === 0 || path.length < result ? path.length : result;
  }, 0);

  return paths.filter(path => path.length === shortestLength);
}

export function graphShortestPathSearch(graph: Graph = [], start: GraphNode = '', end: GraphNode = ''): GraphPath[] {
  if (graph.length === 0 || start.length === 0 || end.length === 0) return [];
  if (graph.length === 1) return [[start, end]];

  const startNeighbors = getNodeNeighbors(graph, start);

  if (startNeighbors.indexOf(end) > -1) return [[start, end]];

  const graphWithoutStart = graph.filter(pair => !pair.includes(start));

  const result = startNeighbors
    .map(neibour => graphShortestPathSearch(graphWithoutStart, neibour, end))
    .map(paths => paths.map(path => [start, ...path]))
    .reduce((sum, paths) => {
      return [...sum, ...paths];
    }, [] as GraphPath[]);

  return reduceLongPaths(result);
}
