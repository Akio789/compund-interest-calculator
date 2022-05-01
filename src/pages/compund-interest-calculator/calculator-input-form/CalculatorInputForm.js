import React, { useState, useContext } from 'react';
import { Alert, Button, InputAdornment, TextField } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PercentIcon from '@mui/icons-material/Percent';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import styles from './CalculatorInputForm.module.css';
import { CompoundInterestCalculatorContext } from '../../../contexts/CompundInterestCalculatorContext';
import _ from 'lodash'

const CalculatorInputForm = () => {
  const { setDataFromCalculatorInputForm } = useContext(CompoundInterestCalculatorContext);

  const [initialDepositFormInput, setInitialDepositFormInput] = useState(0);
  const [yearlyInterestRateFormInput, setYearlyInterestRateFormInput] = useState(0);
  const [yearsToInvestFormInput, setYearsToInvestFormInput] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const onInitialDepositFormInputChange = ({ target: { value } }) => {
    if (_.isNaN(Number(value))) {
      return;
    }
    setInitialDepositFormInput(value);
  };
  const onYearlyInterestRateFormInputChange = ({ target: { value } }) => {
    if (_.isNaN(Number(value))) {
      return;
    }
    setYearlyInterestRateFormInput(value);
  };
  const onYearsToInvestFormInputChange = ({ target: { value } }) => {
    if (!_.isInteger(Number(value))) {
      return;
    }
    setYearsToInvestFormInput(value);
  };
  const onButtonClicked = () => {
    if (initialDepositFormInput === '' || yearlyInterestRateFormInput === '' || yearsToInvestFormInput === '') {
      setErrorMessage('Some fields are missing');
      return;
    }
    setDataFromCalculatorInputForm(
      initialDepositFormInput,
      yearlyInterestRateFormInput,
      yearsToInvestFormInput
    );
  };

  return (
    <div className={styles.form}>
      <h3>Enter your data</h3>
      {
        errorMessage
        && (
          <Alert
            severity="error"
            onClose={() => setErrorMessage('')}
          >
            Some fields are missing
          </Alert>)
      }
      <TextField
        label="Initial Deposit"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          )
        }}
        value={initialDepositFormInput}
        onChange={onInitialDepositFormInputChange}
      />
      <TextField
        label="Yearly Interest Rate"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PercentIcon />
            </InputAdornment>
          )
        }}
        value={yearlyInterestRateFormInput}
        onChange={onYearlyInterestRateFormInputChange}
      />
      <TextField
        label="Yearly To Invest"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CalendarTodayIcon />
            </InputAdornment>
          )
        }}
        value={yearsToInvestFormInput}
        onChange={onYearsToInvestFormInputChange}
      />
      <Button
        variant="contained"
        onClick={onButtonClicked}
      >
        Calculate
      </Button>
    </div>
  );
}

export default CalculatorInputForm;
