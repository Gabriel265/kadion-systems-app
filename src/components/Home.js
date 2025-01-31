import React from 'react';
import { Typography, Container } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to Kadion Systems
      </Typography>
      <Typography variant="body1">
        Empowering businesses from startups to enterprises with complete IT and development solutions.
      </Typography>
    </Container>
  );
};

export default Home;