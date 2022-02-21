import React from "react";
import { Dashboard } from "../components";
import { useAuth } from "../context/AuthContext";

export function DashboardContainer({ children }) {
  const { currentUser } = useAuth();

  return (
    <Dashboard>
      <h2>Dashboard</h2>
      <h3>Welcome {currentUser.email}!</h3>
      {children}
    </Dashboard>
  );
}
