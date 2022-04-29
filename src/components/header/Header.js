import React from 'react';
import { AppBar, Typography, Toolbar } from '@mui/material';
import PropTypes from 'prop-types';

const Header = ({ className }) => {
  return (
    <AppBar position="static" className={className}>
      <Toolbar variant="dense">
        <Typography variant="h6">
          Compund Interest Calculator
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  className: PropTypes.string
};

export default Header;