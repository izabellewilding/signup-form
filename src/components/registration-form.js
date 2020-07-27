import React from "react";
import { Container, FormContainer, Form } from "./containers";
import { Heading1, Body } from "./typography";
import { Input } from "./input";
import { Label } from "./label";
import { Field } from "./field";
import { Button } from "./button";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Password } from "../assets/padlock.svg";

const RegistrationForm = () => {
  return (
    <Container>
      <Heading1>Create an Account</Heading1>
      <FormContainer>
        <Body>Sign up with your name, email, and a password.</Body>
        <Form>
          <Field>
            <Label for="name">
              <User />
            </Label>
            <Input name="name" type="text" required />
          </Field>
          <Field>
            <Label for="email">
              <Email />
            </Label>
            <Input name="Email" type="text" required />
          </Field>
          <Field>
            <Label for="password">
              <Password />
            </Label>
            <Input
              name="password"
              type="password"
              minlength="8"
              pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
              onInput={(e) => e.target.setCustomValidity("")}
              onInvalid={(e) => {
                e.target.setCustomValidity("");
                if (!e.target.validity.valid) {
                  e.target.setCustomValidity(
                    "Must contain at least one upper case letter, at least one lower case letter, at least one number, at least one special character, minimum eight in length"
                  );
                }
              }}
              required
            />
          </Field>
          <Button type="submit">
            <Body button>Submit</Body>
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default RegistrationForm;
