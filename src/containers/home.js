import React from "react";
import { Hero } from "../components";

export function HeroContainer({ children }) {
  return (
    <Hero>
      <Hero.Heading>Premium, custom screenwriting experience</Hero.Heading>
      <Hero.SubHeading>
        Write your scripts, create your shot list, and design your storyboard
        all in one place
      </Hero.SubHeading>

      <Hero.Form>
        <Hero.Input placeholder="Enter your email" />
        <Hero.Submit type="submit">sign up</Hero.Submit>
      </Hero.Form>
      {children}
    </Hero>
  );
}
