import { render, screen } from '@testing-library/react';
import CompoundInterestCalculator from './CompoundInterestCalculator';

test('renders base page', () => {
  render(<CompoundInterestCalculator />);
  const headerTitle = screen.getByText('Compund Interest Calculator');
  expect(headerTitle).toBeInTheDocument();
});
