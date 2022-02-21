import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { Home, SignUp } from "./pages";

export default function App() {
  return (
    <AuthProvider>
      <SignUp />
    </AuthProvider>
  );
}
