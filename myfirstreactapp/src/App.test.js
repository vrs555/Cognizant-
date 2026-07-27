import { render, screen } from '@testing-library/react';
import App from './App';

test('renders react heading', () => {
  render(<App />);
  const heading = screen.getByText(/welcome to the first session of react/i);
  expect(heading).toBeInTheDocument();
});