import React from 'react';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';

const Services = () => {
  const services = [
    'Custom Website Development',
    'Mobile Apps (IOS & Android)',
    'E-commerce Solutions',
    'Software Development',
    'Website Hosting',
    'Domain Management',
    'SSL Certificates'
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Services
      </Typography>
      <Grid container spacing={3}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{service}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Services;