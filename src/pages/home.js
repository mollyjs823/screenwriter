import React from "react";
import PageWrapper from "../containers/wrapper";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/home";

export default function Home() {
  return (
    <PageWrapper>
      <HeaderContainer></HeaderContainer>
      <HeroContainer></HeroContainer>
    </PageWrapper>
  );
}
