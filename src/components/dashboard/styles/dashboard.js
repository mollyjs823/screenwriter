import styled from "styled-components/macro";

export const Container = styled.div`
  grid-column: 2 / -2;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

export const Header = styled.h2`
  font-size: 2em;
  text-transform: uppercase;
  color: var(--blue);
  padding: 1em 0;
`;

export const SubHeading = styled.h3`
  font-size: 1.2em;
  color: var(--lt-gray);
`;

export const Button = styled.p`
  text-decoration: none;
  color: var(--white);
  background: var(--blue);
  border-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.5em 1em;
`;
