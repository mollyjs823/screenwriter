import React, { useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import PageWrapper from "../containers/wrapper";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import { useAuth } from "../context/AuthContext";

export default function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { from } = location.state ? location.state : "";

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      setLoading(false);
      navigate("/dashboard");
    } catch {
      setError("Failed to create an account");
    }
  }

  return (
    <PageWrapper image="/one-gradient.svg" position="bottom">
      <HeaderContainer></HeaderContainer>
      <Form>
        <Form.Base onSubmit={handleSubmit}>
          <Form.Title>Sign Up</Form.Title>
          <Form.Text>Email</Form.Text>
          <Form.Input
            type="email"
            ref={emailRef}
            placeholder="email"
            defaultValue={from}
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

          <Form.TextSmall>
            Already have an account? <Link to="/signin">Log In</Link>
          </Form.TextSmall>
        </Form.Base>
      </Form>
      <FooterContainer></FooterContainer>
    </PageWrapper>
  );
}
