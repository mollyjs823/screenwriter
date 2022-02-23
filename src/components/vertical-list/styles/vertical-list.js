import styled from "styled-components/macro";

export const Container = styled.div`
  grid-column: 2 / -2;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.h3`
  color: var(--blue);
  text-transform: uppercase;
  font-size: 2em;
  padding: 2em;
`;

export const List = styled.ul`
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  flex-flow: row nowrap;
  justify-items: center;
  align-items: center;
  padding: 1em;
  text-align: left;

  &:nth-of-type(even) {
    flex-flow: row-reverse nowrap;
    text-align: right;
  }
`;

export const ListItemNumber = styled.p`
  width: 20%;
  font-family: "Sigmar One", serif;
  font-size: 6em;
  color: var(--dk-blue);
  text-align: center;
`;

export const ListItemText = styled.p`
  width: 40%;
  color: var(--dk-blue);
  font-size: 1.2em;
  padding: 0 2em;
`;

export const ListItemIcon = styled.img`
  width: 40%;
  padding: 0 10em;
  filter: invert(61%) sepia(0%) saturate(1%) hue-rotate(230deg) brightness(93%)
    contrast(85%);
`;

export const Button = styled.p`
  border-radius: 20px;
  background: var(--blue);
  color: var(--white);
  font-family: "Source Code Pro", monospace;
  padding: 0.5em 1em;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    letter-spacing: 2px;
  }
`;
