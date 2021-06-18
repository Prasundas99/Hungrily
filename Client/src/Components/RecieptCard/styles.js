import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  cardWrapper: {
    // marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(4),
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
    minWidth: '320px',
    maxWidth: '700px',
  },
  cardRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
}));
