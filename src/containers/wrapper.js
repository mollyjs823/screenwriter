import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) repeat(5, 1fr) minmax(0, 1fr);
  background-image: url("/home-gradient.svg");
  background-repeat: no-repeat;
  background-size: 100%;
`;

export default function PageWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}
