import { makeStyles } from 'tss-react/mui';

export const useGraphRendererStyles = makeStyles({
  name: 'GraphRenderer'
})(() => ({
  root: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0
  }
}));
