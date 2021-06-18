import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@material-ui/core';

import useStyles from './styles';

const RecieptCard = ({ foodRequest }) => {
  const classes = useStyles();
  let formattedDate = new Date(foodRequest.createdAt).toDateString();

  return (
    <>
      <Card className={classes.cardWrapper}>
        <CardContent>
          <div className={classes.cardRow}>
            <Typography
              gutterBottom
              variant="h5"
              component="h6"
              color="textSecondary"
            >
              <strong>Volunteer: </strong>
            </Typography>
            <Typography gutterBottom variant="h6" color="textPrimary">
              {foodRequest.recievedBy.name}
            </Typography>
          </div>
          <div className={classes.cardRow}>
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              color="textSecondary"
            >
              <strong>Preference: </strong>
            </Typography>
            <Typography gutterBottom variant="h6" color="textPrimary">
              {foodRequest.preference}
            </Typography>
          </div>
          <div className={classes.cardRow}>
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              color="textSecondary"
            >
              <strong>Requested At: </strong>
            </Typography>
            <Typography gutterBottom variant="h6" color="textPrimary">
              {formattedDate}
            </Typography>
          </div>

          <div className={classes.cardRow}>
            <Typography
              gutterBottom
              variant="h6"
              component="h6"
              color="textSecondary"
            >
              <strong>Delivery: </strong>
            </Typography>
            <Typography gutterBottom variant="h6" color="textPrimary">
              {foodRequest.isDelivered ? 'Don' : 'Not done'}
            </Typography>
          </div>
        </CardContent>
        {/* <CardActions>
          <Button size="small" color="primary" variant="outlined">
            Accept
          </Button>
          <Button size="small" color="secondary" variant="outlined">
            Reject
          </Button>
        </CardActions> */}
      </Card>
    </>
  );
};

export default RecieptCard;
