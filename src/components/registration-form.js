import React from "react";
import { Container, FormContainer, Form } from "./containers";
import { Heading1, Body } from "./typography";
import { Input } from "./input";
import { Label } from "./label";
import { Field } from "./field";
import { Button } from "./button";

//Todo:
// - JavaScript form & password validation

const RegistrationForm = () => {
  return (
    <Container>
      <Heading1>Create an Account</Heading1>
      <FormContainer>
        <Body>Sign up with your name, email, and a password.</Body>
        <Form>
          <Field>
            <Label for="name">Name</Label>
            <Input name="name" type="text" required />
          </Field>
          <Field>
            <Label for="email">Email</Label>
            <Input name="Email" type="text" required />
          </Field>
          <Field>
            <Label for="password">Password</Label>
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
                    "At least one upper case English letter, At least one lower case, At least one digit, At least one special character, Minimum eight in length .{8,} (with the anchors)"
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
