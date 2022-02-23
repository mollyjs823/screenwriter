import React from "react";
import {
  Container,
  Heading,
  List,
  ListItem,
  ListItemNumber,
  ListItemText,
  ListItemIcon,
  Button,
} from "./styles/vertical-list";

export default function VerticalList({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

VerticalList.Heading = function VerticalListHeading({
  children,
  ...restProps
}) {
  return <Heading {...restProps}>{children}</Heading>;
};

VerticalList.List = function VerticalListList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};

VerticalList.ListItem = function VerticalListListItem({
  children,
  ...restProps
}) {
  return <ListItem {...restProps}>{children}</ListItem>;
};

VerticalList.ListItemNumber = function VerticalListListItemNumber({
  children,
  ...restProps
}) {
  return <ListItemNumber {...restProps}>{children}</ListItemNumber>;
};

VerticalList.ListItemText = function VerticalListListItemText({
  children,

  ...restProps
}) {
  return <ListItemText {...restProps}>{children}</ListItemText>;
};

VerticalList.ListItemIcon = function VerticalListListItemIcon({
  children,
  ...restProps
}) {
  return <ListItemIcon {...restProps}>{children}</ListItemIcon>;
};

VerticalList.Button = function VerticalListButton({ children, ...restProps }) {
  return <Button {...restProps}>{children}</Button>;
};
