import { Button, TextField } from '@mui/material';
import React, { useCallback, useEffect, useState } from 'react';

import { useGraphInputStyles } from './styles';
import { GraphInputProps } from './types';

export const GraphInput: React.FC<GraphInputProps> = props => {
  const { graph, onGraphChange } = props;

  const [graphInput, setGraphInput] = useState('');

  const { classes } = useGraphInputStyles();

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
    <section className={classes.root}>
      <TextField value={graphInput} fullWidth multiline onChange={handleInputChange} />

      <Button onClick={handleGraphSubmit}>Submit</Button>
    </section>
  );
};
