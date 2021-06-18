import {
  Button,
  Grid,
  Paper,
  TextareaAutosize,
  TextField,
  Typography,
  Container,
} from '@material-ui/core';
import React from 'react';

import dataProcessing from '../../../../Assets/volinteer.svg';
import { useStyles } from './style';
import { Link } from 'react-router-dom';

const ScanForm = () => {
  const isMobile = window.innerWidth <= 880;
  const classes = useStyles();

  return (
    <>
      <Grid container spacing={10}>
        <Grid item md={6} className={classes.imageGrid}>
          {/*   <Typography
              className={classes.rightPara}
              variant="body"
              component="body"
            >
              We're helping thousands of people around the world verify their
              documents originality every day, and we can help you too!
            </Typography> */}
          <img
            className={classes.leftImage}
            src={dataProcessing}
            alt="data_processing"
          />
        </Grid>
        <Grid item md={5} className={classes.formGrid}>
          <Typography
            className={classes.rightHeading}
            variant="h4"
            component="h2"
          >
            Who are our Volunteer?
          </Typography>
          <Typography>
            Volunteer are the selfless people who are involved with us to
            provide food and other nessicity needs to people who need it.
            <p>What to become our Volinteer?</p>
            <Link to='/VolunteerRegister' style={{ textDecoration: 'none'}}>
              <Button color="primary" variant="contained">
                Register To become a  Volunteer
              </Button>
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ScanForm;
