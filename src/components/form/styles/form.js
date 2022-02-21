import styled from "styled-components/macro";
//import { Link as ReactRouterLink } from 'react-router-dom';

export const Container = styled.div`
  grid-column: 2 / -2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(5px);
  border-radius: 5px;
  width: 100%;
  max-width: 450px;
  margin: auto;
  padding: 60px 68px 40px;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: var(--blue);
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 28px;
`;

export const Text = styled.p`
  color: var(--lt-gray);
  font-size: 1.1em;
  font-weight: 500;
  margin-bottom: 0.4em;
`;

export const TextSmall = styled.p`
  margin-top: 0.5em;
  font-size: 0.9em;
  color: var(--lt-gray);
`;

/*
export const Link = styled(ReactRouterLink)`
    color: white;
    text-decoration: none;

    &:hover{
        text-decoration: underline;
    }
`;*/

export const Input = styled.input`
  background: var(--white);
  border-radius: 25px;
  border: solid 3px var(--blue);
  color: var(--lt-gray);
  height: 50px;
  width: 100%;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 30px;
  }
`;

export const Submit = styled.button`
  background: var(--lt-blue);
  border-radius: 30px;
  border: 0;
  font-size: 1.2em;
  font-weight: bold;
  margin: 2em 0;
  padding: 0.5em 1.2em;
  color: var(--white);
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: var(--dk-blue);
  }

  &:disabled {
    opacity: 0.5;
  }
`;
