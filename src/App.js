import React from 'react';
import CompoundInterestCalculator from './pages/compund-interest-calculator/CompoundInterestCalculator';
import { CompoundInterestCalculatorContextProvider } from './contexts/CompundInterestCalculatorContext';
import './App.css';

function App() {
  return (
    <CompoundInterestCalculatorContextProvider>
      <CompoundInterestCalculator />
    </CompoundInterestCalculatorContextProvider>
  );
}

export default App;
