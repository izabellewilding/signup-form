import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders registration form", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Sign up with your name/i);
  expect(linkElement).toBeInTheDocument();
});
