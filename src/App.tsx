import { FC, useState } from 'react';
import { makeStyles } from 'tss-react/mui';

import { AppProps } from './App.types';
import { GraphInput, GraphRenderer } from './Graph/components';
import { testGraph } from './Graph/Graph.data';

export const useAppStyles = makeStyles({
  name: 'App'
})(() => ({
  root: {
    width: '100%',
    height: '100vh'
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

  return (
    <div className={classes.root}>
      <GraphInput graph={graph} onGraphChange={setGraph} />

      <div className={classes.graphContainer}>
        <GraphRenderer graph={graph} />
      </div>
    </div>
  );
};
