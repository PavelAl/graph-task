import { Graph, GraphNode } from '../Graph.types';

export function getNodesList(graph: Graph) {
  return graph.reduce((result, pair) => {
    const [firstNode, secondNode] = pair;

    if (result.indexOf(firstNode) === -1) result.push(firstNode);
    if (result.indexOf(secondNode) === -1) result.push(secondNode);

    return result;
  }, [] as GraphNode[]);
}
