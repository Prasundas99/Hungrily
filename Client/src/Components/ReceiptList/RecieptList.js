import React, { useEffect, useState } from 'react';

import { Typography, LinearProgress } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import RecieptCard from '../RecieptCard/ReceiptCard.js';
import useStyles from './styles.js';

import { useDispatch, useSelector } from 'react-redux';
import { fetchUserFoodRequests } from '../../redux/action-creators';

const RecieptList = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { data, error, loading } = useSelector(
    (state) => state.userFoodRequest
  );

  useEffect(() => {
    dispatch(fetchUserFoodRequests());
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
            return <RecieptCard key={foodReq.id} foodRequest={foodReq} />;
          })}
        </div>
      )}
    </>
  );
};

export default RecieptList;
