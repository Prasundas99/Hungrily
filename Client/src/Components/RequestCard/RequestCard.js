import React from 'react';
import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography,
} from '@material-ui/core';

import useStyles from './styles';

const RequestCard = ({ foodRequest }) => {
    const classes = useStyles();

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
                            <strong>Name: </strong>
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h6"
                            color="textPrimary"
                        >
                            {foodRequest.user}
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
                        <Typography
                            gutterBottom
                            variant="h6"
                            color="textPrimary"
                        >
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
                        <Typography
                            gutterBottom
                            variant="h6"
                            color="textPrimary"
                        >
                            {foodRequest.time}
                        </Typography>
                    </div>

                    <div className={classes.cardRow}>
                        <Typography
                            gutterBottom
                            variant="h6"
                            component="h6"
                            color="textSecondary"
                        >
                            <strong>Address: </strong>
                        </Typography>
                        <Typography
                            gutterBottom
                            variant="h6"
                            color="textPrimary"
                        >
                            {foodRequest.address}
                        </Typography>
                    </div>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" variant="outlined">
                        Accept
                    </Button>
                    <Button size="small" color="secondary" variant="outlined">
                        Reject
                    </Button>
                </CardActions>
            </Card>
        </>
    );
};

export default RequestCard;
