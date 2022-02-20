import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 2em 6em;
  grid-column: 1 / -1;
`;

export const Navigation = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const NavContainer = styled.div`
  width: ${(props) => props.width};
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const NavItem = styled.a`
  margin-left: 3em;
  color: var(--blue);
  text-decoration: none;
  font-weight: 600;
  padding: 0.5em 1em;
  border-radius: 20px;
  transition: 0.2s ease;

  &:hover {
    background-color: var(--blue);
    color: var(--white);
  }
`;

export const Logo = styled.img`
  filter: invert(26%) sepia(80%) saturate(3004%) hue-rotate(226deg)
    brightness(101%) contrast(87%);
  width: 65px;
  margin-bottom: 15px;
`;

export const Button = styled.a`
  text-decoration: none;
  color: var(--white);
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5em 1em;
  margin-left: 2em;
`;

export const ButtonIcon = styled.img`
  filter: invert(100%);
  margin-left: 0.6em;
`;
