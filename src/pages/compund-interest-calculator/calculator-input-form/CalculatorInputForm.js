import React, { useState, useContext } from 'react';
import { Alert, Button, InputAdornment, MenuItem, TextField } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PercentIcon from '@mui/icons-material/Percent';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import styles from './CalculatorInputForm.module.css';
import { CompoundInterestCalculatorContext } from '../../../contexts/CompundInterestCalculatorContext';
import _ from 'lodash'
import { yearlyInterestFrequency } from '../constants';

const CalculatorInputForm = () => {
  const { setDataFromCalculatorInputForm } = useContext(CompoundInterestCalculatorContext);

  const [initialDepositFormInput, setInitialDepositFormInput] = useState(0);
  const [yearlyInterestRateFormInput, setYearlyInterestRateFormInput] = useState(0);
  const [yearsToInvestFormInput, setYearsToInvestFormInput] = useState(0);
  const [
    yearlyInterestFrequencyFormInput,
    setYearlyInterestFrequencyFormInput
  ] = useState(yearlyInterestFrequency.Yearly);
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
      yearsToInvestFormInput,
      yearlyInterestFrequencyFormInput
    );
  };

  const yearlyInterestFrequencyMenuItems = (
    Object.entries(yearlyInterestFrequency).map(([key, val]) => {
      return <MenuItem value={val} key={key}>{key}</MenuItem>
    })
  );

  const onSelectYearlyInterestFrequency = ({ target: { value } }) => {
    setYearlyInterestFrequencyFormInput(value);
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
        variant="standard"
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
        variant="standard"
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
        variant="standard"
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
      <TextField
        select
        label="Yearly Interest Frequency"
        variant="standard"
        value={yearlyInterestFrequencyFormInput}
        onChange={onSelectYearlyInterestFrequency}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ScheduleIcon />
            </InputAdornment>
          )
        }}
      >
        {yearlyInterestFrequencyMenuItems}
      </TextField>
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
