import { makeStyles } from '@material-ui/core/styles';
import { findByLabelText } from '@testing-library/dom';

export const useStyles = makeStyles((theme) => ({
  Paper: {
    padding: '2rem',
    height: '24rem',
    marginTop: '4rem',
    marginBottom: '4rem',
    width: '100%',
  },
  PaperMobile: {
    padding: '2rem',
    height: '24rem',
    marginTop: '4rem',
    marginBottom: '2.1rem',
  },
  heading: {
    display: 'flex',
    justifyContent: 'center',
    fontSize: '2.2rem',
    fontWeight: 900,
    color: '#ffff',
    lineHeight: '1.25',
    textAlign: 'left',
  },
  rightHeading: {
    marginTop: '4rem',
    fontSize: '2.6rem',
    fontWeight: 900,
    color: '#fff',
    lineHeight: '1.25',
    textAlign: 'left',
  },
  rightPara: {
    //  marginLeft: "3.9rem",
    marginTop: '1rem',
    fontSize: '1.16rem',
  },
  form: {
    marginTop: '1rem',
    width: '100%',
    border: '1px solid #9999f1b0',
    borderRadius: '6px',
  },
  submit: {
    backgroundColor: '#008a00',
    color: '#fff',
    marginTop: '0.6rem',
    borderRadius: '6px',
    padding: '0.4rem 2rem 0.4rem 2rem',
    fontSize: '1.04rem',
    marginLeft: '50%',
    transform: 'translateX(-50%)',
    width: '50%',
    '&:hover': {
      backgroundColor: '#008a00',
    },
  },
  leftImage: {
    width: '100%',
    marginTop: '18%',
  },
  imageGrid: {
    order: 1,
    [theme.breakpoints.down('md')]: {
      order: 2,
    },
  },
  formGrid: {
    order: 2,
    [theme.breakpoints.down('md')]: {
      order: 1,
    },
  },
}));
