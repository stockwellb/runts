import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "styled-theming";
import style from "../style";

const basicColor = theme.variants("mode", "variant", style.basicColor);

const StyledDivider = styled.hr`
  border: 0;
  border-bottom: 1px;
  border-style: solid;
  opacity: 0.8;
  border-color: ${basicColor};
`;

const Divider = ({ variant }) => <StyledDivider variant={variant} />;

Divider.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success", "error"])
};

Divider.defaultProps = {
  variant: "secondary"
};

export { Divider };
