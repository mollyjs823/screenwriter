import React, { useState } from "react";
import { Hero } from "../components";
import { Link } from "react-router-dom";

export function HeroContainer({ children }) {
  const [email, setEmail] = useState("");
  return (
    <Hero>
      <Hero.Heading>Premium, custom screenwriting experience</Hero.Heading>
      <Hero.SubHeading>
        Write your scripts, create your shot list, and design your storyboard
        all in one place
      </Hero.SubHeading>

      <Hero.Form>
        <Hero.FormImg src={"/icon-email.svg"} />
        <Hero.Input
          placeholder="Enter your email"
          onChange={(evt) => {
            setEmail(evt.target.value);
          }}
        />
        <Link to="/signup" state={{ from: email }}>
          <Hero.Submit type="submit">sign up</Hero.Submit>
        </Link>
      </Hero.Form>
      {children}
    </Hero>
  );
}
