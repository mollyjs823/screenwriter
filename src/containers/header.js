import React from "react";
import { Header } from "../components";
import { Link } from "react-router-dom";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Navigation>
        <Header.NavContainer width={"50%"}>
          <Link to="/">
            <Header.Logo src={`/logo.svg`} />
          </Link>
          <Header.NavItem href="#">about</Header.NavItem>
          <Header.NavItem href="#">contact</Header.NavItem>
          <Header.NavItem href="#">pricing</Header.NavItem>
        </Header.NavContainer>
        <Header.NavContainer width={"auto"}>
          <Link to="/signin">
            <Header.Button color="#4361ee">
              sign in <Header.ButtonIcon />
            </Header.Button>
          </Link>
          <Link to="/signup">
            <Header.Button color="#f72585">sign up</Header.Button>
          </Link>
        </Header.NavContainer>
      </Header.Navigation>
      {children}
    </Header>
  );
}
