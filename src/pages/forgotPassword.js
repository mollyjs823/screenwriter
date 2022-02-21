import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

import PageWrapper from "../containers/wrapper";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";

export default function ForgotPassword() {
  const emailRef = useRef(null);
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for a reset password email!");
    } catch {
      setError("Failed to send email to reset password");
    }
    setLoading(false);
  }

  return (
    <PageWrapper>
      <HeaderContainer></HeaderContainer>
      <Form>
        <Form.Base onSubmit={handleSubmit}>
          <Form.Title>Password Reset</Form.Title>
          <Form.Text>Email</Form.Text>
          <Form.Input
            type="email"
            ref={emailRef}
            placeholder="email"
            required
          ></Form.Input>

          {error && <Form.Error>{error}</Form.Error>}
          {message && <Form.Error>{message}</Form.Error>}

          <Form.Submit type="submit" disabled={loading}>
            reset password
          </Form.Submit>

          <Link to="/signin">Log In</Link>

          <Form.TextSmall>
            Need an account? <Link to="/signup">Sign Up</Link>
          </Form.TextSmall>
        </Form.Base>
      </Form>
      <FooterContainer></FooterContainer>
    </PageWrapper>
  );
}
