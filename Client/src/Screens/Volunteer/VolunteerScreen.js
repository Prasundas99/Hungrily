import React, { useEffect, useState } from 'react';

import {
  Typography,
  Grid,
  LinearProgress,
  useMediaQuery,
  Tabs,
  Tab,
} from '@material-ui/core';
import CardList from '../../Components/CardList/CardList';
import Heatmap from '../../Components/Heatmap/Heatmap';
import useStyles from './styles.js';

const VolunteerScreen = () => {
  // const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(0);
  const notMobileDevice = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // const { data, error, loading } = useSelector(
  //   (state) => state.recievedFoodRequests
  // );

  // useEffect(() => {
  //   dispatch(fetchRecievedFoodRequests());
  // }, [dispatch]);

  return (
    <>
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
            <Tab label="Request List" />
            <Tab label="Request HeatMap" />
          </Tabs>
        </Grid>
        <Grid item sm={12} md={10}>
          {selectedTab === 0 && <CardList />}
          {selectedTab === 1 && <Heatmap />}
        </Grid>
      </Grid>
    </>
  );
};

export default VolunteerScreen;
