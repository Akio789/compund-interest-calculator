import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';

const Header = () => {
  return (
    <AppBar>
      <Toolbar variant="dense">
        <Typography variant="h6">
          Compund Interest Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;