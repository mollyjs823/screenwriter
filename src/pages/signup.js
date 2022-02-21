import React, { useRef, useState } from "react";
import PageWrapper from "../containers/wrapper";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <PageWrapper>
      <HeaderContainer></HeaderContainer>
      <Form>
        <Form.Base onSubmit={handleSubmit}>
          <Form.Title>Sign Up</Form.Title>
          <Form.Text>Email</Form.Text>
          <Form.Input
            type="email"
            ref={emailRef}
            placeholder="email"
            required
          ></Form.Input>

          <Form.Text>Password</Form.Text>
          <Form.Input
            type="password"
            ref={passwordRef}
            placeholder="password"
            required
          ></Form.Input>

          <Form.Text>Confirm Password</Form.Text>
          <Form.Input
            type="password"
            ref={confirmPasswordRef}
            placeholder="confirm password"
            required
          ></Form.Input>

          {error && <Form.Error>{error}</Form.Error>}

          <Form.Submit type="submit" disabled={loading}>
            sign up
          </Form.Submit>
        </Form.Base>
      </Form>
    </PageWrapper>
  );
}
