import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import PageWrapper from "../containers/wrapper";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      navigate("/dashboard");
    } catch {
      setError("Failed to sign in");
    }
  }

  return (
    <PageWrapper>
      <HeaderContainer></HeaderContainer>
      <Form>
        <Form.Base onSubmit={handleSubmit}>
          <Form.Title>Log In</Form.Title>
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

          {error && <Form.Error>{error}</Form.Error>}

          <Form.Submit type="submit" disabled={loading}>
            log in
          </Form.Submit>

          <Link to="/forgot-passwd">Forgot Password?</Link>

          <Form.TextSmall>
            Need an account? <Link to="/signup">Sign Up</Link>
          </Form.TextSmall>
        </Form.Base>
      </Form>
    </PageWrapper>
  );
}
