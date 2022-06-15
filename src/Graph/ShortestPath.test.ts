import { Graph, GraphNode, GraphPair, GraphPath } from './Graph.types';
import { graphShortestPathSearch } from './Graph.utils';

const ABPair: GraphPair = ['A', 'B'];
const ACPair: GraphPair = ['A', 'C'];
const AFPair: GraphPair = ['A', 'F'];
const AKPair: GraphPair = ['K', 'A'];
const BCPair: GraphPair = ['B', 'C'];
const BEPair: GraphPair = ['B', 'E'];
const CDPair: GraphPair = ['C', 'D'];
const DEPair: GraphPair = ['E', 'D'];
const DFPair: GraphPair = ['D', 'F'];
const DMPair: GraphPair = ['M', 'D'];
const DJPair: GraphPair = ['D', 'J'];
const EMPair: GraphPair = ['E', 'M'];
const KFPair: GraphPair = ['K', 'F'];
const JFPair: GraphPair = ['J', 'F'];
const JMPair: GraphPair = ['J', 'M'];

function starAndEndReplaceCheck(graph: Graph, start: GraphNode, end: GraphNode, expected: GraphPath[]) {
  expect(graphShortestPathSearch(graph, start, end)).toEqual(expected);
  expect(graphShortestPathSearch(graph, end, start)).toEqual(expected.map(path => path.reverse()));
}

describe('Finding the shortest ways in the graph', () => {
  test('Empty array or empty start/end returns empty array', () => {
    expect(graphShortestPathSearch([], 'A', 'B')).toEqual([]);
    expect(graphShortestPathSearch([ABPair], '', 'B')).toEqual([]);
    expect(graphShortestPathSearch([ABPair], 'A', '')).toEqual([]);
  });

  test('2 nodes case', () => {
    starAndEndReplaceCheck([ABPair], 'A', 'B', [['A', 'B']]);
  });

  test('3 nodes case in circular', () => {
    const graph: Graph = [ABPair, BCPair, ACPair];

    starAndEndReplaceCheck(graph, 'A', 'B', [['A', 'B']]);
    starAndEndReplaceCheck(graph, 'A', 'C', [['A', 'C']]);
    starAndEndReplaceCheck(graph, 'B', 'C', [['B', 'C']]);
  });

  test('3 nodes case in line', () => {
    const graph: Graph = [ABPair, BCPair];

    starAndEndReplaceCheck(graph, 'A', 'B', [['A', 'B']]);
    starAndEndReplaceCheck(graph, 'B', 'C', [['B', 'C']]);
    starAndEndReplaceCheck(graph, 'A', 'C', [['A', 'B', 'C']]);
  });

  test('5 nodes case', () => {
    const graph: Graph = [ABPair, ACPair, CDPair, DFPair, AFPair];

    starAndEndReplaceCheck(graph, 'B', 'D', [
      ['B', 'A', 'C', 'D'],
      ['B', 'A', 'F', 'D']
    ]);
  });

  test('9 nodes case', () => {
    const graph: Graph = [
      ABPair,
      ACPair,
      AFPair,
      AKPair,
      BCPair,
      BEPair,
      CDPair,
      DEPair,
      DFPair,
      DMPair,
      DJPair,
      EMPair,
      KFPair,
      JFPair,
      JMPair
    ];

    starAndEndReplaceCheck(graph, 'K', 'E', [
      ['K', 'A', 'B', 'E'],
      ['K', 'F', 'D', 'E']
    ]);
  });
});
