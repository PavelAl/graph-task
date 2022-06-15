import cytoscape from 'cytoscape';
import avsdf from 'cytoscape-avsdf';
import React, { useEffect, useRef } from 'react';

import { graphToCyroscapeElements } from '~/Graph/cytoscape';
import { GraphPath } from '~/Graph/Graph.types';
import { graphShortestPathSearch } from '~/Graph/utils';

import { useGraphRendererStyles } from './styles';
import { GraphRendererProps } from './types';

cytoscape.use(avsdf);

function reducePathToEdgeIds(path: GraphPath) {
  const result: string[] = [];

  for (let i = 0; i < path.length - 1; i++) {
    const currentNode = path[i];
    const nextNode = path[i + 1];

    result.push([currentNode, nextNode].join('-'), [nextNode, currentNode].join('-'));
  }

  return result;
}

export const GraphRenderer: React.FC<GraphRendererProps> = props => {
  const { graph = [], start = '', end = '' } = props;
  const containerRef = useRef<HTMLDivElement>();
  const { classes } = useGraphRendererStyles();

  useEffect(() => {
    if (containerRef.current) {
      const shortestPaths = graphShortestPathSearch(graph, start, end);
      const highlightedEdges = shortestPaths.map(reducePathToEdgeIds).reduce((result, edges) => {
        return [...result, ...edges];
      }, []);

      const elements = graphToCyroscapeElements(graph).map(element => {
        if (element.group === 'nodes') return element;

        const isHighlighted = highlightedEdges.includes(element.data.id);

        return { ...element, classes: isHighlighted ? 'highlighted' : '' };
      });

      cytoscape({
        container: containerRef.current,

        elements,

        layout: {
          name: 'avsdf',
          animate: false
        },

        // so we can see the ids
        style: [
          {
            selector: 'node',
            style: {
              label: 'data(id)'
            }
          },
          {
            selector: '.highlighted',
            style: {
              'background-color': '#61bffc',
              'line-color': '#61bffc'
            }
          }
        ]
      });
    }
  }, [graph, start, end]);

  return <div ref={containerRef} className={classes.root} />;
};
