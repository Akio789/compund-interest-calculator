import { render, screen } from '@testing-library/react';
import CompoundInterestCalculator from './CompoundInterestCalculator';

test('renders base page', () => {
  render(<CompoundInterestCalculator />);
  const headerTitle = screen.getByText('Compund Interest Calculator');
  const form = screen.getByText('Enter your data');
  expect(headerTitle).toBeInTheDocument();
  expect(form).toBeInTheDocument();
});
