import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <AppBar position="static" style={{ marginBottom: '20px' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Kadion Systems
        </Typography>
        <Button color="inherit" component={Link} to="/" style={{ margin: '0 10px' }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/services" style={{ margin: '0 10px' }}>
          Services
        </Button>
        <Button color="inherit" component={Link} to="/pricing" style={{ margin: '0 10px' }}>
          Pricing
        </Button>
        <Button color="inherit" component={Link} to="/contact" style={{ margin: '0 10px' }}>
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;