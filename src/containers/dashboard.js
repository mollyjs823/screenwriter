import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Dashboard } from "../components";
import { useAuth } from "../context/AuthContext";

export function DashboardContainer({ children }) {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigation = useNavigate();
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
    <Dashboard>
      <h2>Profile</h2>
      <h3>email: {currentUser.email}</h3>
      {error && { error }}
      <p onClick={handleLogout}>Log out</p>
      <Link to="/update-profile">Update Profile</Link>
      {children}
    </Dashboard>
  );
}
