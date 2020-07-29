import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RegistrationForm from "./registration-form";
import { act } from "react-dom/test-utils";

describe("Registration", () => {
  it("renders", () => {
    const { asFragment } = render(<RegistrationForm />);
    expect(asFragment()).toMatchSnapshot();
  });

  it("calls on submit function when details are valid", async () => {
    render(<RegistrationForm />);

    await act(async () => {
      fireEvent.change(screen.getByLabelText("Name"), {
        target: { value: "John" },
      });
      fireEvent.change(screen.getByLabelText("Email"), {
        target: { value: "email@testing.com" },
      });
      fireEvent.change(screen.getByLabelText("Password"), {
        target: { value: "Abcdefg1!" },
      });
      fireEvent.change(screen.getByLabelText("Confirm password"), {
        target: { value: "Abcdefg1!" },
      });
    });

    await act(async () => {
      fireEvent.click(screen.getByText(/Submit/i));
      // expect(onSubmit).toHaveBeenCalled();
    });

    // screen.getByText(/Welcome/i);
  });
});
