import cytoscape from 'cytoscape';
import avsdf from 'cytoscape-avsdf';
import React, { useEffect, useRef } from 'react';

import { graphToCyroscapeElements } from '~/Graph/cytoscape';

import { useGraphRendererStyles } from './styles';
import { GraphRendererProps } from './types';

cytoscape.use(avsdf);

export const GraphRenderer: React.FC<GraphRendererProps> = props => {
  const { graph } = props;
  const containerRef = useRef<HTMLDivElement>();
  const { classes } = useGraphRendererStyles();

  useEffect(() => {
    if (containerRef.current) {
      cytoscape({
        container: containerRef.current,

        elements: graphToCyroscapeElements(graph),

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
  }, [graph]);

  return <div ref={containerRef} className={classes.root} />;
};
