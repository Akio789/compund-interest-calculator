import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, InputAdornment, MenuItem, TextField } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import PercentIcon from '@mui/icons-material/Percent';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import ScheduleIcon from '@mui/icons-material/Schedule';
import styles from './CalculatorInputForm.module.css';
import { CompoundInterestCalculatorContext } from '../../../contexts/CompundInterestCalculatorContext';
import _ from 'lodash'
import { YEARLY_INTEREST_FREQUENCIES } from '../constants';

const CalculatorInputForm = ({ className }) => {
  const { setDataFromCalculatorInputForm } = useContext(CompoundInterestCalculatorContext);

  const [initialDepositFormInput, setInitialDepositFormInput] = useState(0);
  const [yearlyInterestRateFormInput, setYearlyInterestRateFormInput] = useState(0);
  const [yearsToInvestFormInput, setYearsToInvestFormInput] = useState(0);
  const [
    yearlyInterestFrequencyFormInput,
    setYearlyInterestFrequencyFormInput
  ] = useState(YEARLY_INTEREST_FREQUENCIES.Yearly);
  const [depositsFormInput, setDepositsFormInput] = useState(0);
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
  const onDepositsFormInputChange = ({ target: { value } }) => {
    if (_.isNaN(Number(value))) {
      return;
    }
    setDepositsFormInput(value);
  };
  const onButtonClicked = () => {
    const inputsToValidate = [
      initialDepositFormInput,
      yearlyInterestRateFormInput,
      yearsToInvestFormInput,
      depositsFormInput
    ]
    if (inputsToValidate.find((value) => value === '') !== undefined) {
      setErrorMessage('Some fields are missing');
      return;
    }
    setDataFromCalculatorInputForm(
      Number(initialDepositFormInput),
      Number(yearlyInterestRateFormInput),
      Number(yearsToInvestFormInput),
      Number(depositsFormInput),
      yearlyInterestFrequencyFormInput
    );
  };

  const yearlyInterestFrequencyMenuItems = (
    Object.entries(YEARLY_INTEREST_FREQUENCIES).map(([key, val]) => {
      return <MenuItem value={val} key={key}>{key}</MenuItem>
    })
  );

  const onSelectYearlyInterestFrequency = ({ target: { value } }) => {
    setYearlyInterestFrequencyFormInput(value);
  };

  return (
    <div className={`${styles.form} ${className}`}>
      <h3>Enter your data</h3>
      {
        errorMessage
        && (
          <Alert
            severity="error"
            onClose={() => setErrorMessage('')}
          >
            {errorMessage}
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
        label="Years To Invest"
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
      <TextField
        variant="standard"
        label="Deposits"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AttachMoneyIcon />
            </InputAdornment>
          )
        }}
        value={depositsFormInput}
        onChange={onDepositsFormInputChange}
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

CalculatorInputForm.propTypes = {
  className: PropTypes.string
};

export default CalculatorInputForm;
