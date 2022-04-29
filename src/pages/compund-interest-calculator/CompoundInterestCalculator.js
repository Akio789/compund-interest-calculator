import React from 'react';
import { Container } from '@mui/material';
import Header from '../../components/header/Header';
import CalculatorInputForm from './calculator-input-form/CalculatorInputForm';
import styles from './CompoundInterestCalculator.module.css';

const CompoundInterestCalculator = () => {
  return (
    <>
      <Header className={styles.header} />
      <Container>
        <CalculatorInputForm />
      </Container>
    </>
  );
}

export default CompoundInterestCalculator;
