import { Graph } from '../../Graph.types';

export interface GraphInputProps {
  graph: Graph;
  onGraphChange: (newGraph: Graph) => void;
}
