import React from 'react';
import Header from '../../components/header/Header';
import CalculatorInputForm from './calculator-input-form/CalculatorInputForm';
import styles from './CompoundInterestCalculator.module.css';
import CalculationResults from './calculation-results/CalculationResults';

const CompoundInterestCalculator = () => {
  return (
    <>
      <Header className={styles.header} />
      <div className={styles.container}>
        <CalculatorInputForm className={styles.form} />
        <CalculationResults className={styles.results} />
      </div>
    </>
  );
}

export default CompoundInterestCalculator;
