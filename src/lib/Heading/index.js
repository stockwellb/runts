import React from "react";
import styled from "styled-components";
import * as colors from "../colors";

const createHeading = component => styled[component]`
  color: ${colors.PRIMARY};
  text-align: ${({ align }) => align || "left"};
`;

const Heading = ({ variant, children, ...other }) => {
  const StyledHeader = createHeading(variant || "h1");
  return <StyledHeader {...other}>{children}</StyledHeader>;
};

export { Heading };
