import React from 'react';
import PropTypes from 'prop-types';
import ResultsChart from './results-chart/ResultsChart';

const CalculationResults = ({ className }) => {
  return (
    <div className={className}>
      <h3>Compound Interest Results</h3>
      <ResultsChart />
    </div>
  );
}

CalculationResults.propTypes = {
  className: PropTypes.string
};

export default CalculationResults;
