import React from 'react';
import { Grid, Card, CardContent, Typography, Container } from '@mui/material';

const Pricing = () => {
  const packages = [
    { name: 'Startup Accelerator', price: 'MWK 1,000,000 ($600)' },
    { name: 'Business Growth', price: 'MWK 2,500,000 ($1500)' },
    { name: 'Enterprise Solution', price: 'MWK 5,000,000 ($3000)' }
  ];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Pricing
      </Typography>
      <Grid container spacing={3}>
        {packages.map((pkg, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{pkg.name}</Typography>
                <Typography variant="body1">{pkg.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Pricing;