import { GraphNode } from '../../Graph.types';

export interface GraphPathInputProps {
  onPathChange: (start: GraphNode, end: GraphNode) => void;
}
