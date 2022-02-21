import styled from "styled-components/macro";

export const Container = styled.div`
  grid-column: 2 / -2;
  display: grid;
  grid-template-columns: 1.5fr 2fr;

  background: var(--white);
  border-radius: 30px;
  margin: 5em 0;
  filter: drop-shadow(5px 10px 8px rgba(0, 0, 0, 0.2));
`;

export const ColumnContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  background: var(--blue);
  color: var(--white);
  padding: 2em;
  border-radius: inherit;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const Header = styled.p`
  text-transform: uppercase;
  font-size: 1.5em;
  font-weight: bold;
  letter-spacing: 3px;
  padding: 1em 0;
`;

export const Text = styled.p``;

export const List = styled.ul`
  list-style: none;
  line-height: 50px;
`;

export const Bullet = styled.li`
  position: relative;
  padding-left: 40px;

  &::before {
    content: "";
    width: 30px;
    height: 30px;
    position: absolute;
    background-image: url("/bullet-check.svg");
    background-size: cover;
    background-position: center;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const Button = styled.p`
  background: var(--white);
  color: var(--blue);
  font-family: "Source Code Pro", monospace;
  font-weight: 600;
  letter-spacing: 1px;
  padding: 0.5em 2em;
  margin-top: 1em;
  border-radius: 20px;
`;

export const Icons = styled.div``;
