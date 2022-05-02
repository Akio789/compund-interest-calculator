import React from 'react';
import PropTypes from 'prop-types';

const CalculationResults = ({ className }) => {
  return (
    <div className={className}>CalculationResults</div>
  );
}

CalculationResults.propTypes = {
  className: PropTypes.string
};

export default CalculationResults;
