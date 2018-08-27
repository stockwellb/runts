import React from "react";
import styled from "styled-components";

const createHeading = component => styled[component]`
  color: ${({ theme }) => theme.palette.primary.main};
  text-align: ${({ align }) => align || "left"};
`;

const Heading = ({ variant, children, ...other }) => {
  const StyledHeader = createHeading(variant || "h1");
  return <StyledHeader {...other}>{children}</StyledHeader>;
};

export { Heading };
