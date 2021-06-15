import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import ScanForm from './components/SacnForm/SacnForm';
import Steps from './components/Steps';

import Container from '@material-ui/core/Container';


const Home = () => {
  return (
    <>
      <Container>
        <HeroSection />
        <Steps />
        <ScanForm />
      </Container>
    </>
  );
};

export default Home;