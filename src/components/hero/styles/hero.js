import styled from "styled-components/macro";

export const Container = styled.div`
  margin-top: 7em;
  grid-column: 2 / span 2;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
`;

export const Heading = styled.h2`
  color: var(--blue);
  font-size: 3em;
  position: relative;

  &::before {
    content: "SS";
    color: var(--lt-gray);
    font-family: "Sigmar One", sans-serif;
    font-size: 2em;
    opacity: 10%;
    font-weight: bold;

    position: absolute;
    z-index: -99;
    top: -0.75em;
    left: 20px;
  }
`;

export const SubHeading = styled.p`
  color: var(--lt-gray);
  font-size: 1.2em;
  width: 70%;
  margin: 2em 0;
  align-self: flex-start;
`;

export const Form = styled.form``;

export const Input = styled.input``;

export const Submit = styled.button``;
