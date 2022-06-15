import { makeStyles } from 'tss-react/mui';

export const useGraphPathInputStyles = makeStyles({
  name: 'GraphPathInput'
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
