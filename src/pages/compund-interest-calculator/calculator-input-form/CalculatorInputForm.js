import React, { useState } from 'react';
import { Alert, Button, InputAdornment, TextField } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PercentIcon from '@mui/icons-material/Percent';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import styles from './CalculatorInputForm.module.css';
import _ from 'lodash'

const CalculatorInputForm = () => {
  const [initialDeposit, setInitialDeposit] = useState(0);
  const [yearlyInterestRate, setYearlyInterestRate] = useState(0);
  const [yearsToInvest, setYearsToInvest] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const onInitialDepositChange = ({ target: { value } }) => {
    if (_.isNaN(Number(value))) {
      return;
    }
    setInitialDeposit(value);
  };
  const onYearlyInterestRateChange = ({ target: { value } }) => {
    if (_.isNaN(Number(value))) {
      return;
    }
    setYearlyInterestRate(value);
  };
  const onYearsToInvestChange = ({ target: { value } }) => {
    if (!_.isInteger(Number(value))) {
      return;
    }
    setYearsToInvest(value);
  };
  const onButtonClicked = () => {
    if (initialDeposit === '' || yearlyInterestRate === '' || yearsToInvest === '') {
      setErrorMessage('Some fields are missing');
      return;
    }
    console.log('calculating');
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
        value={initialDeposit}
        onChange={onInitialDepositChange}
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
        value={yearlyInterestRate}
        onChange={onYearlyInterestRateChange}
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
        value={yearsToInvest}
        onChange={onYearsToInvestChange}
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
