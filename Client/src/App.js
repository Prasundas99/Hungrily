import { ThemeProvider, Container, CssBaseline } from '@material-ui/core';

import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/';

import SignIn from './Screens/SignIn/SignIn';
import HomeScreen from './Screens/Home/HomeScreen';
import RegistrationScreen from './Screens/Register/RegisterScreen';
import VolunteerScreen from './Screens/Volunteer/VolunteerScreen';

import theme from './theme';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();

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
            <Route path="/volunteer/profile" component={VolunteerScreen} />
          </main>
        </Container>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
