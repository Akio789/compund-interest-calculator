import React, { createContext, useState } from 'react';

const CompoundInterestCalculatorContext = createContext();

const CompoundInterestCalculatorContextProvider = ({ children }) => {
  const [initialDeposit, setInitialDeposit] = useState(null);
  const [yearlyInterestRate, setYearlyInterestRate] = useState(null);
  const [yearsToInvest, setYearsToInvest] = useState(null);

  const setDataFromCalculatorInputForm = (
    initialDeposit,
    yearlyInterestRate,
    yearsToInvest
  ) => {
    setInitialDeposit(Number(initialDeposit));
    setYearlyInterestRate(Number(yearlyInterestRate));
    setYearsToInvest(Number(yearsToInvest));
  }

  return (
    <CompoundInterestCalculatorContext.Provider
      value={{
        initialDeposit,
        yearlyInterestRate,
        yearsToInvest,
        setDataFromCalculatorInputForm
      }}
    >
      {children}
    </CompoundInterestCalculatorContext.Provider>
  );
}

export { CompoundInterestCalculatorContext, CompoundInterestCalculatorContextProvider }
