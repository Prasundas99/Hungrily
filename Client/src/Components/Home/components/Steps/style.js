import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '4rem',
    marginBottom: '4rem',
  },
  leftImg: {
    width: '94%',
    marginTop: '18%',
  },
  heading: {
    textAlign: 'left',
    fontSize: '2.4rem',
    fontWeight: '900',
    color: 'rgb(5, 24, 104)',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
  stepLabel: {
    fontSize: '1.6rem',
    color: 'rgb(81, 70, 175)',
    fontWeight: '800',
  },
}));
