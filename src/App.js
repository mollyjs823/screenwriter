import React from "react";
import { AuthProvider } from "./context/AuthContext";
import {
  Home,
  SignUp,
  SignIn,
  Dashboard,
  ForgotPassword,
  UpdateProfile,
} from "./pages";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./helpers/routes";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/signup" element={<SignUp />}></Route>
          <Route exact path="/signin" element={<SignIn />}></Route>
          <Route exact path="/dashboard" element={<ProtectedRoute />}>
            <Route exact path="/dashboard" element={<Dashboard />}></Route>
          </Route>
          <Route
            exact
            path="/forgot-passwd"
            element={<ForgotPassword />}
          ></Route>
          <Route exact path="/update-profile" element={<ProtectedRoute />}>
            <Route
              exact
              path="/update-profile"
              element={<UpdateProfile />}
            ></Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
