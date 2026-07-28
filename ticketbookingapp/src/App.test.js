import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders ticket booking app", () => {
    render(<App />);
    expect(screen.getByText(/Ticket Booking App/i)).toBeInTheDocument();
});