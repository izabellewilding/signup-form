import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders registration form", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Create an Account/i);
  expect(linkElement).toBeInTheDocument();
});
