import { Button, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from 'tss-react/mui';

import { Graph } from '../Graph.types';

interface GraphInputProps {
  graph: Graph;
  onGraphChange: (newGraph: Graph) => void;
}

export const useAddLockStyles = makeStyles({
  name: 'GraphInput'
})(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',

    '& > *:not(:last-child)': {
      marginRight: theme.spacing(2)
    }
  }
}));

export const GraphInput: React.FC<GraphInputProps> = props => {
  const { graph, onGraphChange } = props;

  const [graphInput, setGraphInput] = useState('');

  useEffect(() => {
    const newGraphInput = JSON.stringify(graph);
    setGraphInput(newGraphInput);
  }, [graph]);

  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = useCallback(e => {
    const newValue = e.target?.value;
    setGraphInput(newValue);
  }, []);

  const handleGraphSubmit = useCallback(() => {
    try {
      const newGraph = JSON.parse(graphInput);
      onGraphChange(newGraph);
    } catch (error) {
      console.log(error);
      alert('Error occured while parcing');
    }
  }, [onGraphChange, graphInput]);

  return (
    <section>
      <TextField value={graphInput} onChange={handleInputChange} />

      <Button onClick={handleGraphSubmit}>Submit</Button>
    </section>
  );
};
