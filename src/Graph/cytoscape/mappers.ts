import { Graph } from '../Graph.types';
import { getNodesList } from '../Graph.utils';

import { CytoscapeElement } from './element';

export function graphToCyroscapeElements(graph: Graph): CytoscapeElement[] {
  const nodes = getNodesList(graph);

  const nodesAsElements: CytoscapeElement[] = nodes.map(node => {
    return {
      group: 'nodes',
      data: {
        id: node
      }
    };
  });

  const pairsAsEdges: CytoscapeElement[] = graph.map(pair => {
    const [source, target] = pair;

    return {
      group: 'edges',
      data: {
        id: pair.join('-'),
        source,
        target
      }
    };
  });

  return [...nodesAsElements, ...pairsAsEdges];
}
