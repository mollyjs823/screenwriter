import styled from "styled-components/macro";

export const Container = styled.div`
  margin-top: 7em;
  grid-column: 2 / span 2;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: center;
  user-select: none;
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

export const Form = styled.form`
  padding: 0.5em 0.7em;
  background: var(--white);
  border-radius: 30px;
  filter: drop-shadow(5px 10px 8px rgba(0, 0, 0, 0.2));

  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

export const FormImg = styled.img`
  filter: invert(61%) sepia(0%) saturate(1%) hue-rotate(230deg) brightness(93%)
    contrast(85%);
  padding-right: 1em;
`;

export const Input = styled.input`
  border: 0;

  &:focus {
    outline: none;
  }
`;

export const Submit = styled.button`
  border: 0;
  padding: 0.5em 1em;
  background: var(--blue);
  color: var(--white);
  border-radius: 20px;
  font-size: 1.1em;
  font-family: "Source Code Pro", monospace;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    letter-spacing: 2px;
  }
`;
