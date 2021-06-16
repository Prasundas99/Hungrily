import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { useHistory, Link } from 'react-router-dom';
import React from 'react';
import HeroImage from '../../../../Assets/a.png';
import { useStyles } from './style';

const HeroSection = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container justify="space-around">
      <Grid item md={6} className={classes.leftGrid}>
        <Typography className={classes.leftHeading} variant="h3" component="h2">
        Hungrily - committed to the people in need

        </Typography>
        <Typography className={classes.leftPara} variant="h5" component="p">
          Welcome to Hungrily - an application focusing on providing food to the needful people with the help of volinteers helping in this crisis with foods <br />
          <br />
        </Typography>
        <Link to="/Register" style={{ textDecoration: 'none', color: '#fff' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.register}
          >
           Login as Volinteer
          </Button>
        </Link>
        <Link to="/Login" style={{ textDecoration: 'none', color: '#fff' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.login}
          >
            Login as user
          </Button>
        </Link>
      </Grid>

      <Grid item md={5}>
        <img className={classes.imageIllustration} src={HeroImage} />
      </Grid>
    </Grid>
  );
};

export default HeroSection;
