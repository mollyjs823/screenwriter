import React from "react";
import {
  Container,
  ColumnContainer,
  Header,
  Text,
  List,
  Bullet,
  Button,
  IconContainer,
  IconGroup,
  IconDesc,
  Icon,
} from "./styles/card";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Card.ColumnContainer = function CardColumnContainer({
  children,
  ...restProps
}) {
  return <ColumnContainer {...restProps}>{children}</ColumnContainer>;
};

Card.Header = function CardHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Card.Text = function CardText({ children, color, ...restProps }) {
  return (
    <Text style={{ color: color }} {...restProps}>
      {children}
    </Text>
  );
};

Card.List = function CardList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

Card.Bullet = function CardBullet({ children, ...restProps }) {
  return <Bullet {...restProps}>{children}</Bullet>;
};

Card.Button = function CardButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};

Card.IconContainer = function CardIconContainer({ children, ...restProps }) {
  return <IconContainer {...restProps}>{children}</IconContainer>;
};

Card.IconGroup = function CardIconGroup({ children, ...restProps }) {
  return <IconGroup {...restProps}>{children}</IconGroup>;
};

Card.IconDesc = function CardIconDesc({ children, ...restProps }) {
  return <IconDesc {...restProps}>{children}</IconDesc>;
};

Card.Icon = function CardIcon({ children, src, ...restProps }) {
  return (
    <Icon src={src} {...restProps}>
      {children}
    </Icon>
  );
};
