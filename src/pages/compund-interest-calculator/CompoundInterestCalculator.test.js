import { render, screen } from '@testing-library/react';
import { CompoundInterestCalculatorContext } from '../../contexts/CompoundInterestCalculatorContext';
import CompoundInterestCalculator from './CompoundInterestCalculator';

const defaultValues = {
  initialDeposit: 0,
  yearlyInterestRate: 0,
  yearsToInvest: 0,
  deposits: 0,
  yearlyInterestFrequency: 0,
  setDataFromCalculatorInputForm: () => { },
  calculateResults: () => ({}),
  calculateResultsSummary: () => {
    return {
      'Initial Deposits': 0,
      'Additional Deposits': 0,
      'Accumulated Interests': 0,
      'Total': 0
    }
  }
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
    const initialDeposit = screen.getByText('Initial Deposits');
    const additionalDeposits = screen.getByText('Additional Deposits');
    const accumulatedInterests = screen.getByText('Accumulated Interests');
    const total = screen.getByText('Total');
    expect(headerTitle).toBeInTheDocument();
    expect(form).toBeInTheDocument();
    expect(initialDeposit).toBeInTheDocument();
    expect(additionalDeposits).toBeInTheDocument();
    expect(accumulatedInterests).toBeInTheDocument();
    expect(total).toBeInTheDocument();
  });
});
