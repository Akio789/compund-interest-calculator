import { render, screen } from '@testing-library/react';
import { CompoundInterestCalculatorContext } from '../../../contexts/CompoundInterestCalculatorContext';
import CalculatorInputForm from './CalculatorInputForm';
import userEvent from '@testing-library/user-event'
import { YEARLY_INTEREST_FREQUENCIES } from '../constants';

const setDataFromCalculatorInputForm = jest.fn();

const defaultValues = {
  setDataFromCalculatorInputForm,
  calculateResults: () => ({})
}

const renderComponent = (values) => {
  return render(
    <CompoundInterestCalculatorContext.Provider value={{ ...defaultValues, ...values }}>
      <CalculatorInputForm />
    </CompoundInterestCalculatorContext.Provider >
  )
}

describe('Calculator Input Form', () => {
  it('renders base form', () => {
    renderComponent();
    const title = screen.getByText('Enter your data');
    const initialDeposit = screen.getByLabelText('Initial Deposit');
    const yearlyInterestRate = screen.getByLabelText('Yearly Interest Rate');
    const yearsToInvest = screen.getByLabelText('Years To Invest');
    const yearlyInterestFrequency = screen.getByLabelText('Yearly Interest Frequency');
    const deposits = screen.getByLabelText('Deposits');
    expect(title).toBeInTheDocument();
    expect(initialDeposit).toBeInTheDocument();
    expect(initialDeposit).toHaveValue("0");
    expect(yearlyInterestRate).toBeInTheDocument();
    expect(yearlyInterestRate).toHaveValue("0");
    expect(yearsToInvest).toBeInTheDocument();
    expect(yearsToInvest).toHaveValue("0");
    expect(yearlyInterestFrequency).toBeInTheDocument();
    expect(screen.getByText('Yearly')).toBeInTheDocument();
    expect(deposits).toBeInTheDocument();
    expect(deposits).toHaveValue("0");
  });

  it('inputs accept only double', () => {
    renderComponent();
    const initialDeposit = screen.getByLabelText('Initial Deposit');
    const yearlyInterestRate = screen.getByLabelText('Yearly Interest Rate');
    const deposits = screen.getByLabelText('Deposits');
    userEvent.type(initialDeposit, 'aa1.1aa');
    userEvent.type(yearlyInterestRate, 'aa1.1aa');
    userEvent.type(deposits, 'aa1.1aa');
    expect(Number(initialDeposit.value)).toBe(1.1);
    expect(Number(yearlyInterestRate.value)).toBe(1.1);
    expect(Number(deposits.value)).toBe(1.1);
  })

  it('inputs accept only int', () => {
    renderComponent();
    const yearsToInvest = screen.getByLabelText('Years To Invest');
    userEvent.type(yearsToInvest, 'aa1.1aa');
    expect(Number(yearsToInvest.value)).toBe(1);
  })

  it('fires fn with right data on button clicked', () => {
    renderComponent();
    const initialDeposit = screen.getByLabelText('Initial Deposit');
    const yearlyInterestRate = screen.getByLabelText('Yearly Interest Rate');
    const yearsToInvest = screen.getByLabelText('Years To Invest');
    const deposits = screen.getByLabelText('Deposits');
    const yearlyInterestFrequency = screen.getByLabelText('Yearly Interest Frequency');
    userEvent.type(initialDeposit, '1');
    userEvent.type(yearlyInterestRate, '2');
    userEvent.type(yearsToInvest, '3');
    userEvent.type(deposits, '4');
    userEvent.click(yearlyInterestFrequency);
    userEvent.keyboard('{arrowdown}');
    userEvent.keyboard('{enter}');
    const button = screen.getByText('Calculate');
    userEvent.click(button);
    expect(setDataFromCalculatorInputForm).toHaveBeenCalledWith(
      1, 2, 3, 4, YEARLY_INTEREST_FREQUENCIES.Monthly
    );
  })
});
