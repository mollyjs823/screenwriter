import React from "react";
import { Header } from "../components";

export function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Navigation>
        <Header.NavContainer width={"50%"}>
          <Header.Logo src={`/logo.svg`} />
          <Header.NavItem href="#">about</Header.NavItem>
          <Header.NavItem href="#">contact</Header.NavItem>
          <Header.NavItem href="#">pricing</Header.NavItem>
        </Header.NavContainer>
        <Header.NavContainer width={"auto"}>
          <Header.Button href="#" color="#4361ee">
            sign in <Header.ButtonIcon />
          </Header.Button>
          <Header.Button href="#" color="#f72585">
            sign up
          </Header.Button>
        </Header.NavContainer>
      </Header.Navigation>
      {children}
    </Header>
  );
}
