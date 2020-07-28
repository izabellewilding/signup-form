import React from "react";
import { render, cleanup } from "@testing-library/react";
import RegistrationForm from "./registration-form";

it("renders", () => {
  const { asFragment } = render(<RegistrationForm />);
  expect(asFragment()).toMatchSnapshot();
});
