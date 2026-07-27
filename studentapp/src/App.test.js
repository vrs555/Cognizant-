import { render, screen } from '@testing-library/react';
import App from './App';

test('renders home page', () => {
  render(<App />);
  const text = screen.getByText(/Welcome to the Home page/i);
  expect(text).toBeInTheDocument();
});