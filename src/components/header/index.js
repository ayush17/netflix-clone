import React from "react";
import { Link as ReactRounterLink } from "react-router-dom";
import { Background, Container, Logo, ButtonLink } from "./styles/header";
export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};
Header.ButtonLink = function HeaderButtonLink({ children, ...restProps }) {
  return <ButtonLink {...restProps}>{children}</ButtonLink>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRounterLink to={to}>
      <Logo {...restProps} />
    </ReactRounterLink>
  );
};
