import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header } from "../components";
import { useAuth } from "../context/AuthContext";

export function DashHeaderContainer({ children }) {
  const navigation = useNavigate();
  const [error, setError] = useState("");
  const { logout } = useAuth();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      navigation("/signin");
    } catch {
      setError("Failed to log out");
    }
  }

  return (
    <Header>
      <Header.Navigation>
        <Header.NavContainer width={"50%"}>
          <Link to="/">
            <Header.Logo src={`/logo.svg`} />
          </Link>
        </Header.NavContainer>
        <Header.NavContainer width={"auto"}>
          <Link to="/update-profile">
            <Header.NavItem>Update Profile</Header.NavItem>
          </Link>
          {error && { error }}
          <Link to="/signin">
            <Header.Button onClick={handleLogout} color="#f72585">
              Log out
            </Header.Button>
          </Link>
        </Header.NavContainer>
      </Header.Navigation>
      {children}
    </Header>
  );
}
