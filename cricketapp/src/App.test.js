import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders cricket app", () => {
  render(<App />);
  expect(screen.getByText(/Cricket App/i)).toBeInTheDocument();
});