import React from "react";
import { Container, Header, SubHeading, Button } from "./styles/dashboard";

export default function Dashboard({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Dashboard.Button = function DashboardButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Dashboard.Header = function DashboardHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Dashboard.SubHeading = function DashboardSubHeading({
  children,
  ...restProps
}) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};
