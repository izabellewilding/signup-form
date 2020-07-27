import React, { useState } from "react";
import { Container, FormContainer, Form } from "./containers";
import { Heading1, Body } from "./typography";
import { Input } from "./input";
import { Label } from "./label";
import { Field } from "./field";
import { Button } from "./button";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Password } from "../assets/padlock.svg";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const RegistrationForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); //default would be to refresh page and navigte to /thanks
    setSubmitting(true);
    const form = e.target;
    fetch("", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        name,
        email,
        password,
      }),
    })
      .then(() => {
        console.warn("then");
      })
      .catch((error) => alert(error))
      .finally(() => setSubmitting(false));
  };

  return (
    <Container>
      <Heading1>Create an Account</Heading1>
      <FormContainer>
        <Body>Sign up with your name, email, and a password.</Body>
        <Form name="registration" onSubmit={handleSubmit}>
          <Field>
            <Label for="name">
              <User />
            </Label>
            <Input
              name="name"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Field>
          <Field>
            <Label for="email">
              <Email />
            </Label>
            <Input
              name="Email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Field>
          <Field>
            <Label for="password">
              <Password />
            </Label>
            <Input
              name="password"
              type="password"
              placeholder="Password"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Field>
          <Button type="submit" disabled={submitting}>
            <Body button>Submit</Body>
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default RegistrationForm;
