import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders blogger application", () => {
  render(<App />);
  expect(screen.getByText(/Course Details/i)).toBeInTheDocument();
});