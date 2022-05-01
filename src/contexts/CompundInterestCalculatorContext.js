import React, { createContext, useState } from 'react';

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

  return (
    <CompoundInterestCalculatorContext.Provider
      value={{
        initialDeposit,
        yearlyInterestRate,
        yearsToInvest,
        deposits,
        yearlyInterestFrequency,
        setDataFromCalculatorInputForm
      }}
    >
      {children}
    </CompoundInterestCalculatorContext.Provider>
  );
}

export { CompoundInterestCalculatorContext, CompoundInterestCalculatorContextProvider }
