export interface NodeData {
  // element data (put json serialisable dev data here)
  id: string; // mandatory (string) id for each element, assigned automatically on undefined
  parent?: string; // indicates the compound node parent id; not defined => no parent
  // (`parent` can be effectively changed by `eles.move()`)
}

export interface EdgeData {
  id: string;
  // inferred as an edge because `source` and `target` are specified:
  source: string; // the source node id (edge comes from this node)
  target: string; // the target node id (edge goes to this node)
  // (`source` and `target` can be effectively changed by `eles.move()`)
}
export interface CytoscapeElement {
  group?: 'nodes' | 'edges'; // 'nodes' for a node, 'edges' for an edge
  data: NodeData | EdgeData;
  selected?: boolean; // whether the element is selected (default false)
  selectable?: boolean; // whether the selection state is mutable (default true)
  locked?: boolean; // when locked a node's position is immutable (default false)
  grabbable?: boolean; // whether the node can be grabbed and moved by the user
  pannable?: boolean; // whether dragging the node causes panning instead of grabbing
  classes?: string | string[]; // an array (or a space separated string) of class names that the element has
}

export interface CytoscapeStyle {
  selector: string;
  style?: {
    [styleKey: string]: string | number;
  };
}
