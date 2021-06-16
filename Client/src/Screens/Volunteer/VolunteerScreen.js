import React, { useEffect, useState } from 'react';

import {
  Typography,
  Grid,
  LinearProgress,
  useMediaQuery,
  Tabs,
  Tab,
} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import RequestCard from '../../Components/RequestCard/RequestCard';
import useStyles from './styles.js';

import { useDispatch, useSelector } from 'react-redux';
import { fetchRecievedFoodRequests } from '../../redux/action-creators';

const VolunteerScreen = () => {
  const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(0);
  const notMobileDevice = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const { data, error, loading } = useSelector(
    (state) => state.recievedFoodRequests
  );

  useEffect(() => {
    dispatch(fetchRecievedFoodRequests());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <LinearProgress
          style={{ marginTop: '4px', marginBottom: '4px' }}
          color="primary"
        />
      ) : error ? (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      ) : (
        <Grid container className={classes.tabContainer}>
          <Grid className={classes.paper} item md={2}>
            <Tabs
              orientation={notMobileDevice ? 'vertical' : 'horizontal'}
              variant="standard"
              value={selectedTab}
              centered={notMobileDevice ? false : true}
              onChange={handleChange}
              className={classes.tabs}
            >
              <Tab label="Details" />
              <Tab label="Orders" />
            </Tabs>
          </Grid>
          <Grid item sm={12} md={10}>
            {selectedTab === 0 && (
              <div>
                <Typography
                  component="h3"
                  variant="h4"
                  style={{ marginBottom: '16px', marginTop: '16px' }}
                >
                  FOOD REQUESTS
                </Typography>
                {data.map((foodReq) => {
                  return <RequestCard key={foodReq.id} foodRequest={foodReq} />;
                })}
              </div>
            )}
            {selectedTab === 1 && (
              <div>
                <h2>Heatmap</h2>
              </div>
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default VolunteerScreen;
