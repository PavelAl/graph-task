import { Button, TextField } from '@mui/material';
import React, { ChangeEventHandler, useCallback, useState } from 'react';

import { useGraphPathInputStyles } from './styles';
import { GraphPathInputProps } from './types';

export const GraphPathInput: React.FC<GraphPathInputProps> = props => {
  const { onPathChange } = props;

  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');

  const handleStartChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = useCallback(event => {
    const newValue = event.target.value;
    console.log(newValue);
    setStart(newValue);
  }, []);

  const handleEndChange: ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement> = useCallback(event => {
    const newValue = event.target.value;
    setEnd(newValue);
  }, []);

  const handleFindPath = useCallback(() => {
    onPathChange(start.toUpperCase(), end.toUpperCase());
  }, [start, end, onPathChange]);

  const { classes } = useGraphPathInputStyles();

  return (
    <section className={classes.root}>
      <TextField label={'Start'} value={start} fullWidth multiline onChange={handleStartChange} />

      <TextField label={'End'} value={end} fullWidth multiline onChange={handleEndChange} />

      <Button onClick={handleFindPath}>Find</Button>
    </section>
  );
};
