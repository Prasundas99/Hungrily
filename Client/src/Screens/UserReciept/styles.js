import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  tabs: {
    marginRight: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
  },
}));
