import React, { useEffect, useState } from 'react';

import {
  Typography,
  Grid,
  LinearProgress,
  useMediaQuery,
  Tabs,
  Tab,
} from '@material-ui/core';

import RecieptList from '../../Components/ReceiptList/RecieptList';
import useStyles from './styles.js';

const UserReceiptScreen = () => {
  // const dispatch = useDispatch();
  const [selectedTab, setSelectedTab] = useState(0);
  const notMobileDevice = useMediaQuery('(min-width:600px)');
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

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
            <Tab label="Reciept List" />
          </Tabs>
        </Grid>
        <Grid item sm={12} md={10}>
          {selectedTab === 0 && <RecieptList />}
        </Grid>
      </Grid>
    </>
  );
};

export default UserReceiptScreen;
