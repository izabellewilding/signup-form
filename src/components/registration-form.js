import React from "react";
import { Container, FormContainer, Form } from "./containers";
import { Heading1, Body } from "./typography";
import { Input } from "./input";
import { Label } from "./label";
import { Field } from "./field";
import { Button } from "./button";

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
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
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
