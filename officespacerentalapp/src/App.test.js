import { render, screen } from '@testing-library/react';
import App from './App';

test('renders office heading', () => {
  render(<App />);
  const heading = screen.getByText(/Office Space/i);
  expect(heading).toBeInTheDocument();
});