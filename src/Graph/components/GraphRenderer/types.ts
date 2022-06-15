import { Graph, GraphNode } from '../../Graph.types';

export interface GraphRendererProps {
  graph: Graph;
  start: GraphNode;
  end: GraphNode;
}
