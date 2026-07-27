import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders student details", () => {
  render(<App />);
  const text = screen.getByText(/Student Details/i);
  expect(text).toBeInTheDocument();
});