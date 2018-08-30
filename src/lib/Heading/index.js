import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "styled-theming";
import style from "../style";

const color = theme.variants("mode", "variant", style.basicColor);

const createHeading = component => styled[component]`
  color: ${color};
  text-align: ${({ align }) => align || "left"};
`;

const Heading = ({ variant, component, children, ...other }) => {
  const StyledHeader = createHeading(component || "h1");
  return (
    <StyledHeader variant={variant} {...other}>
      {children}
    </StyledHeader>
  );
};

Heading.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success", "error"])
};

Heading.defaultProps = {
  variant: "secondary"
};

export { Heading };
