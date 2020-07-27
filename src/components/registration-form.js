import React, { useState, useRef } from "react";
import { Container, FormContainer, Form } from "./containers";
import { Heading1, Body } from "./typography";
import { Input, PasswordInput } from "./input";
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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const pageTitleRef = useRef();

  const handleSubmit = (e) => {
    //prevent the default form behaviour: refreshing page
    e.preventDefault();
    //set submitting so button can appear disabled
    setSubmitting(true);
    const form = e.target;
    fetch("/.netlify/functions/registration", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        name,
        email,
        password,
      }),
    })
      .then((response) => {
        console.log("response", response);
      })
      .then(() => {
        pageTitleRef.current.innerHTML = `Welcome, ${name}.`;
        const registrationForm = document.getElementById("form");
        registrationForm.removeChild(registrationForm.childNodes[1]);
      })
      .catch((error) => alert(error))
      .finally(() => setSubmitting(false));
  };

  return (
    <Container id="form">
      <Heading1 ref={pageTitleRef}>Create an Account</Heading1>
      <FormContainer>
        <Body>Sign up with your name, email, and a password.</Body>
        <Form method="POST" onSubmit={handleSubmit}>
          <Field>
            <Label htmlFor="name">
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
            <Label htmlFor="email">
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
            <Label htmlFor="password">
              <Password />
            </Label>
            <PasswordInput
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
