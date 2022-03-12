import React from "react";
import { Dashboard } from "../components";
import { useAuth } from "../context/AuthContext";

export function DashboardContainer({ children }) {
  const { currentUser } = useAuth();

  return (
    <Dashboard>
      <Dashboard.Header>Dashboard</Dashboard.Header>
      <Dashboard.SubHeading>Welcome {currentUser.email}!</Dashboard.SubHeading>
      {children}
    </Dashboard>
  );
}
