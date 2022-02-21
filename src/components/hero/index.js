import React from "react";
import {
  Container,
  Heading,
  SubHeading,
  Form,
  FormImg,
  Input,
  Submit,
} from "./styles/hero";

export default function Hero({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Hero.Heading = function HeroHeading({ children, ...restProps }) {
  return <Heading {...restProps}>{children}</Heading>;
};

Hero.SubHeading = function HeroSubHeading({ children, ...restProps }) {
  return <SubHeading {...restProps}>{children}</SubHeading>;
};

Hero.Form = function HeroForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

Hero.FormImg = function HeroFormImg({ children, ...restProps }) {
  return <FormImg {...restProps}>{children}</FormImg>;
};

Hero.Input = function HeroInput({ children, ...restProps }) {
  return <Input {...restProps}>{children}</Input>;
};

Hero.Submit = function HeroSubmit({ children, ...restProps }) {
  return <Submit {...restProps}>{children}</Submit>;
};
