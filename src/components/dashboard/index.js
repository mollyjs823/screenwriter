import React from "react";
import { Container, Button } from "./styles/dashboard";

export default function Dashboard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Dashboard.Button = function DashboardButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
