import React, { useEffect } from 'react';
import { ThemeProvider, Container, CssBaseline } from '@material-ui/core';

import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/';

import SignIn from './Screens/SignIn/SignIn';
import HomeScreen from './Screens/Home/HomeScreen';
import RegistrationScreen from './Screens/Register/RegisterScreen';
import VolunteerScreen from './Screens/Volunteer/VolunteerScreen';
import Chat from './Components/Chat';


import theme from './theme';

import useStyles from './styles';
import store from './redux/';

//For Watson session storage
// Import action
import { createSession } from "./redux/action-creators/watsonAction";

// Import axios
import axios from "axios";

// TODO: Remove session_id from localstorage when app is closed
if (localStorage.session) {
  // delete axios.defaults.headers.common["session_id"];
  axios.defaults.headers.common["session_id"] = localStorage.session;
} else {
  // delete axios.defaults.headers.common["session_id"];
  localStorage.removeItem("session_id");
}

const App = () => {
  const classes = useStyles();
  useEffect(() => {
    // Check if there session
    if (!localStorage.session) {
      // Create
      store.dispatch(createSession());
    }
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <NavBar />
        <Container maxWidth={'lg'}>
          <main className={classes.mainWrapper}>
            <Route path="/" exact component={HomeScreen} />
            <Route path="/login" component={SignIn} />
            <Route path="/register" component={RegistrationScreen} />
            <Route path="/chat" component={Chat} />
            <Route path="/volunteer/profile" component={VolunteerScreen} />
          </main>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
