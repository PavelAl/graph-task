import { makeStyles } from 'tss-react/mui';

export const useGraphInputStyles = makeStyles({
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
