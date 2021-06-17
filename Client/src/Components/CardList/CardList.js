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
import RequestCard from '../RequestCard/RequestCard.js';
import useStyles from './styles.js';

import { useDispatch, useSelector } from 'react-redux';
import { fetchRecievedFoodRequests } from '../../redux/action-creators';

const CardList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
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
    </>
  );
};

export default CardList;
