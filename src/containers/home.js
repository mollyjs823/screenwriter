import React, { useState } from "react";
import { Hero, Card } from "../components";
import { Link } from "react-router-dom";

export function HeroContainer({ children }) {
  const [email, setEmail] = useState("");
  return (
    <>
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
      <Card>
        <Card.ColumnContainer>
          <Card.Text color="var(--lt-blue)">your options are</Card.Text>
          <Card.Header>Limitless</Card.Header>
          <Card.List>
            <Card.Bullet>Format your script</Card.Bullet>
            <Card.Bullet>Fully customize your shot list</Card.Bullet>
            <Card.Bullet>Build the resources you need</Card.Bullet>
          </Card.List>
          <Card.Button>learn more</Card.Button>
        </Card.ColumnContainer>
        <Card.IconContainer>
          <Card.IconGroup>
            <Card.Icon src="/icon-build.svg" />
            <Card.IconDesc>draft</Card.IconDesc>
          </Card.IconGroup>
          <Card.IconGroup>
            <Card.Icon src="/icon-pencil.svg" />
            <Card.IconDesc>script</Card.IconDesc>
          </Card.IconGroup>
          <Card.IconGroup>
            <Card.Icon src="/icon-note.svg" />
            <Card.IconDesc>compile</Card.IconDesc>
          </Card.IconGroup>
          <Card.IconGroup>
            <Card.Icon src="/icon-shutter.svg" />
            <Card.IconDesc>shots</Card.IconDesc>
          </Card.IconGroup>
        </Card.IconContainer>
      </Card>
    </>
  );
}
