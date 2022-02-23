import React from "react";
import PageWrapper from "../containers/wrapper";
import { HeaderContainer } from "../containers/header";
import { HeroContainer } from "../containers/home";
import { FooterContainer } from "../containers/footer";

export default function Home() {
  return (
    <PageWrapper image="/home-gradient.svg" position="top">
      <HeaderContainer></HeaderContainer>
      <HeroContainer></HeroContainer>
      <FooterContainer></FooterContainer>
    </PageWrapper>
  );
}
