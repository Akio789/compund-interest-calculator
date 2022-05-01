import { render, screen } from '@testing-library/react';
import { CompoundInterestCalculatorContext } from '../../contexts/CompundInterestCalculatorContext';
import CompoundInterestCalculator from './CompoundInterestCalculator';

const defaultValues = {
  initialDeposit: 0,
  yearlyInterestRate: 0,
  yearsToInvest: 0,
  deposits: 0,
  yearlyInterestFrequency: 0,
  setDataFromCalculatorInputForm: () => { }
}

const renderComponent = (values) => {
  return render(
    <CompoundInterestCalculatorContext.Provider value={{ ...defaultValues, ...values }}>
      <CompoundInterestCalculator />
    </CompoundInterestCalculatorContext.Provider>
  )
}

describe('Compund Interest Calculator', () => {
  it('renders base page', () => {
    renderComponent();
    const headerTitle = screen.getByText('Compund Interest Calculator');
    const form = screen.getByText('Enter your data');
    expect(headerTitle).toBeInTheDocument();
    expect(form).toBeInTheDocument();
  });
});
