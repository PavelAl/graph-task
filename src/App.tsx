import { FC, useCallback, useState } from 'react';
import { makeStyles } from 'tss-react/mui';

import { AppProps } from './App.types';
import { GraphInput, GraphPathInput, GraphRenderer } from './Graph/components';
import { testGraph } from './Graph/Graph.data';
import { GraphNode } from './Graph/Graph.types';

export const useAppStyles = makeStyles({
  name: 'App'
})(theme => ({
  root: {
    width: '100%',
    height: '100vh',

    '& > *:not(:last-child)': {
      marginBottom: theme.spacing(4)
    }
  },
  graphContainer: {
    width: '100%',
    height: '80%',
    position: 'relative'
  }
}));

export const App: FC<AppProps> = () => {
  const [graph, setGraph] = useState(testGraph);
  const { classes } = useAppStyles();

  const [start, setStart] = useState<GraphNode>('');
  const [end, setEnd] = useState<GraphNode>('');

  const handlePathChange = useCallback((newStart: GraphNode, newEnd: GraphNode) => {
    setStart(newStart);
    setEnd(newEnd);
  }, []);

  return (
    <div className={classes.root}>
      <GraphInput graph={graph} onGraphChange={setGraph} />

      <GraphPathInput onPathChange={handlePathChange} />

      <div className={classes.graphContainer}>
        <GraphRenderer graph={graph} start={start} end={end} />
      </div>
    </div>
  );
};
