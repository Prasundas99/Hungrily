import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  navWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navButton: {
    marginRight: theme.spacing(2),
  },
  avatar: {
    color: theme.palette.getContrastText(theme.palette.primary.main),
    backgroundColor: theme.palette.primary.main,
    marginRight: theme.spacing(2),
    '&:hover': {
      cursor: 'pointer',
    },
  },
  headerIconWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '150px',
  },
  menuButton: {
    marginRight: theme.spacing(3),
  },
  mobilenavItems: {
    flexGrow: 0.1,
    fontWeight: 600,
    fontSize: '1rem',
    padding: '1rem 0',
  },
  list: {
    width: 200,
  },
}));
