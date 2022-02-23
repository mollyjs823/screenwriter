import React from "react";
import styled from "styled-components/macro";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) repeat(5, 1fr) minmax(0, 1fr);
  background-repeat: no-repeat;
  background-size: 100%;
`;

export default function PageWrapper({ image, position, children }) {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${image})`,
        backgroundPositionY: `${position}`,
      }}
    >
      {children}
    </Wrapper>
  );
}
