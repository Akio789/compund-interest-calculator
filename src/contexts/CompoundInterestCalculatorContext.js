import React, { createContext, useState } from 'react';
import _ from 'lodash';
import { TIMES_INTEREST_APPLIED_PER_TIME_PERIOD } from '../pages/compund-interest-calculator/constants';

const CompoundInterestCalculatorContext = createContext();

const CompoundInterestCalculatorContextProvider = ({ children }) => {
  const [initialDeposit, setInitialDeposit] = useState(null);
  const [yearlyInterestRate, setYearlyInterestRate] = useState(null);
  const [yearsToInvest, setYearsToInvest] = useState(null);
  const [yearlyInterestFrequency, setYearlyInterestFrequency] = useState(null);
  const [deposits, setDeposits] = useState(null);


  const setDataFromCalculatorInputForm = (
    initialDeposit,
    yearlyInterestRate,
    yearsToInvest,
    deposits,
    yearlyInterestFrequency
  ) => {
    setInitialDeposit(Number(initialDeposit));
    setYearlyInterestRate(Number(yearlyInterestRate));
    setYearsToInvest(Number(yearsToInvest));
    setDeposits(Number(deposits));
    setYearlyInterestFrequency(yearlyInterestFrequency);
  }

  const calculateResults = () => {
    const labels = Array(yearsToInvest).fill().map((x, i) => i + 1)
    const moneyByYear = labels.reduce((arr) => {
      let moneyAtStartOfYear;
      if (arr.length === 0) {
        moneyAtStartOfYear = initialDeposit;
      } else {
        moneyAtStartOfYear = arr[arr.length - 1];
      }
      const yearlyDeposit = deposits * TIMES_INTEREST_APPLIED_PER_TIME_PERIOD[yearlyInterestFrequency]
      const result = (moneyAtStartOfYear * (1 + (yearlyInterestRate / 100))) + yearlyDeposit;
      arr.push(_.round(result, 2));
      return arr;
    }, []);
    return { labels, moneyByYear };
  }

  return (
    <CompoundInterestCalculatorContext.Provider
      value={{
        initialDeposit,
        yearlyInterestRate,
        yearsToInvest,
        deposits,
        yearlyInterestFrequency,
        setDataFromCalculatorInputForm,
        calculateResults
      }}
    >
      {children}
    </CompoundInterestCalculatorContext.Provider>
  );
}

export { CompoundInterestCalculatorContext, CompoundInterestCalculatorContextProvider }
