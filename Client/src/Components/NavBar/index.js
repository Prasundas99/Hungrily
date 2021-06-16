import React, { useState } from 'react';
import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  Tooltip,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
  useTheme,
  ListItem,
  ListItemText,
  List,
  Drawer,
} from '@material-ui/core';

import { Link } from 'react-router-dom';
import ReceiptSharpIcon from '@material-ui/icons/ReceiptSharp';
import MenuIcon from '@material-ui/icons/MenuSharp';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import makeStyles from './styles';

// Redux Stuff
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser } from '../../redux/action-creators';

const Header = () => {
  const classes = makeStyles();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.userLogin);

  const [anchorEl, setAnchorEl] = useState(null);
  const [toggle, setToggle] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('md'));

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser = () => {
    setAnchorEl(null);
    dispatch(signOutUser());
  };

  return (
    <AppBar color="transparent" position="static">
      <Toolbar className={classes.navWrapper}>
        <Link to="/" style={{ textDecoration: 'none', color: 'primary' }}>
          <Typography component="div" variant="h4">
            Hungrily
          </Typography>
        </Link>
        {isMobile ? (
          <>
            <div className={classes.headerIconWrapper}>
              <Link
                to="/login?redirect=reciept"
                style={{
                  textDecoration: 'none',
                  color: 'primary',
                }}
              >
                <Tooltip title="reciept">
                  <IconButton className={classes.navButton}>
                    <ReceiptSharpIcon />
                  </IconButton>
                </Tooltip>
              </Link>

              {data ? (
                <>
                  <Tooltip title={`${data.name.split(' ')[0]}`}>
                    <Avatar
                      onClick={handleClick}
                      className={classes.avatar}
                      variant="circular"
                    >
                      {data.name[0]}
                    </Avatar>
                  </Tooltip>

                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <Link
                      to="/reciept"
                      style={{
                        textDecoration: 'none',
                        color: 'primary',
                      }}
                    >
                      <MenuItem onClick={handleClose}>Reciept</MenuItem>
                    </Link>

                    <Divider />
                    <Link
                      to="/"
                      style={{
                        textDecoration: 'none',
                        color: 'primary',
                      }}
                    >
                      <MenuItem onClick={logoutUser}>Logout</MenuItem>
                    </Link>
                  </Menu>
                </>
              ) : (
                <>
                  <Link
                    to="/login"
                    style={{
                      textDecoration: 'none',
                      color: 'primary',
                    }}
                  >
                    <Tooltip title="login">
                      <IconButton className={classes.navButton}>
                        <GroupAddRoundedIcon />
                      </IconButton>
                    </Tooltip>
                  </Link>
                </>
              )}
            </div>
          </>
        ) : (
          <>
            {/* Mobile view drawer */}
            <IconButton
              edge="start"
              className={classes.menuButton}
              onClick={() => setToggle(true)}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>

            <Drawer
              anchor="right"
              open={toggle}
              onClose={() => setToggle(false)}
            >
              <List className={classes.list}>
                {data ? (
                  <>
                    <ListItem button>
                      <Avatar className={classes.avatar} variant="circular">
                        {data.name[0]}
                      </Avatar>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText
                        primary={'Logout'}
                        className={classes.mobilenavItems}
                        onClick={logoutUser}
                      />
                    </ListItem>
                    <Divider />
                    <ListItem button>
                      <ListItemText
                        primary={'Reciept'}
                        className={classes.mobilenavItems}
                      />
                    </ListItem>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      style={{
                        textDecoration: 'none',
                        color: 'primary',
                      }}
                    >
                      <ListItem button>
                        <ListItemText
                          primary={'login'}
                          className={classes.mobilenavItems}
                        />
                      </ListItem>
                    </Link>
                  </>
                )}

                <Divider />
              </List>
            </Drawer>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
