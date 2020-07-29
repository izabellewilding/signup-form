import React, { useState, useEffect } from "react";
import { Container, FormContainer, Form } from "./containers";
import { Heading1 } from "./typography";
import { Input } from "./input";
import { Label } from "./label";
import { Field } from "./field";
import { Button } from "./button";
import { Icon } from "./icon";
import { ReactComponent as User } from "../assets/user.svg";
import { ReactComponent as Email } from "../assets/email.svg";
import { ReactComponent as Password } from "../assets/padlock.svg";

//Todo:
//28/07: Send form data to database and create list of users
//write full tests for registration form

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState();
  const [animate, setAnimate] = useState(false);

  const handleSubmit = (e) => {
    //prevent the default form behaviour: refreshing page
    e.preventDefault();
    //set submitting so button can appear disabled
    setSubmitting(true);
    const form = e.target;
    //send form data to netlify function
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
        setSuccess(true);
      })
      .catch((error) => alert(error))
      .finally(() => setSubmitting(false));
  };

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <Container>
      <Heading1>{success ? `Welcome, ${name}` : "Create an Account"}</Heading1>
      <FormContainer hidden={success} animateIn={animate}>
        <Form method="POST" onSubmit={handleSubmit}>
          <Field>
            <Icon>
              <User />
            </Icon>
            <Label htmlFor="name" label="name">
              Name
            </Label>
            <Input
              name="name"
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              autocomplete
            />
          </Field>
          <Field>
            <Icon>
              <Email />
            </Icon>
            <Label htmlFor="email" label="email">
              Email
            </Label>
            <Input
              name="Email"
              type="email"
              id="email"
              value={email}
              onInput={(e) => e.target.setCustomValidity("")}
              onInvalid={(e) => {
                e.target.setCustomValidity("");
                if (!e.target.validity.valid) {
                  e.target.setCustomValidity("Must be a valid email address");
                }
              }}
              onChange={(e) => setEmail(e.target.value)}
              required
              autocomplete
            />
          </Field>
          <Field>
            <Icon>
              <Password />
            </Icon>
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              id="password"
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
          <Field>
            <Icon>
              <Password />
            </Icon>
            <Label htmlFor="confirmPassword">Confirm password</Label>
            <Input
              name="confirmPassword"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              minlength="8"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              onKeyUp={(e) => {
                if (
                  password &&
                  confirmPassword &&
                  password !== confirmPassword
                ) {
                  e.target.setCustomValidity("Passwords must match");
                } else {
                  e.target.setCustomValidity("");
                }
              }}
            />
          </Field>
          <Button type="submit" disabled={submitting}>
            Submit
          </Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default RegistrationForm;
