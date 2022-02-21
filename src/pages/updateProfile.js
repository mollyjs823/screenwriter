import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import PageWrapper from "../containers/wrapper";
import { DashHeaderContainer } from "../containers/dashHeader";
import { Form } from "../components";

export default function UpdateProfile() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { currentUser, updateEmail, updatePassword } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }

    Promise.all(promises)
      .then(() => {
        setLoading(false);
        navigate("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account");
        setLoading(false);
      });
  }

  return (
    <PageWrapper>
      <DashHeaderContainer></DashHeaderContainer>
      <Form>
        <Form.Base onSubmit={handleSubmit}>
          <Form.Title>Update Profile</Form.Title>
          <Form.Text>Email</Form.Text>
          <Form.Input
            type="email"
            ref={emailRef}
            placeholder="email"
            defaultValue={currentUser.email}
            required
          ></Form.Input>

          <Form.Text>Password</Form.Text>
          <Form.Input
            type="password"
            ref={passwordRef}
            placeholder="Leave blank to keep the same"
          ></Form.Input>

          <Form.Text>Confirm Password</Form.Text>
          <Form.Input
            type="password"
            ref={confirmPasswordRef}
            placeholder="Leave blank to keep the same"
          ></Form.Input>

          {error && <Form.Error>{error}</Form.Error>}

          <Form.Submit type="submit" disabled={loading}>
            update
          </Form.Submit>

          <Form.TextSmall>
            <Link to="/dashboard">Cancel</Link>
          </Form.TextSmall>
        </Form.Base>
      </Form>
    </PageWrapper>
  );
}
