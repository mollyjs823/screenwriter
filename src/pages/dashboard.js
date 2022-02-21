import React from "react";
import PageWrapper from "../containers/wrapper";
import { HeaderContainer } from "../containers/header";
import { DashboardContainer } from "../containers/dashboard";

export default function Dash() {
  return (
    <PageWrapper>
      <HeaderContainer>
        <DashboardContainer></DashboardContainer>
      </HeaderContainer>
    </PageWrapper>
  );
}
