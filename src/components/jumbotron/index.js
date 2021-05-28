import React from "react";
import {
  Container,
  Item,
  Inner,
  Pane,
  Title,
  SubTitle,
  Image,
} from "./styles/jumbotron";
export default function Jumbotron({
  children,
  direction = "row",
  ...restProps
}) {
  return (
    <Item direction={direction}>
      <Inner>{children}</Inner>
    </Item>
  );
}
Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};
Jumbotron.Title = function JumbotrontTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};
Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};