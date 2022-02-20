import React from "react";
import {
  Container,
  Navigation,
  NavContainer,
  NavItem,
  Logo,
  Button,
  ButtonIcon,
} from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Navigation = function HeaderNavigation({ children, ...restProps }) {
  return <Navigation {...restProps}>{children}</Navigation>;
};

Header.NavContainer = function HeaderNavContainer({ children, ...restProps }) {
  return <NavContainer {...restProps}>{children}</NavContainer>;
};

Header.NavItem = function HeaderNavItem({ children, src, ...restProps }) {
  return (
    <NavItem href={src} {...restProps}>
      {children}
    </NavItem>
  );
};

Header.Logo = function HeaderLogo({ children, src, ...restProps }) {
  return (
    <Logo src={src} alt="Logo" {...restProps}>
      {children}
    </Logo>
  );
};

Header.Button = function HeaderButton({ children, src, color, ...restProps }) {
  return (
    <Button href={src} style={{ backgroundColor: color }} {...restProps}>
      {children}
    </Button>
  );
};

Header.ButtonIcon = function HeaderButtonIcon({ ...restProps }) {
  return <ButtonIcon src={`/icon-signin.svg`} {...restProps} />;
};
