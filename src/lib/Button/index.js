import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "styled-theming";
import style from "../style";

const backgroundColor = theme.variants(
  "mode",
  "variant",
  style.buttonBackgroundColor
);
const color = theme.variants("mode", "variant", style.buttonColor);
const basicColor = theme.variants("mode", "variant", style.basicColor);
const spacing = mult => props => theme("mode", style.spacing)(props) * mult;

const BaseButton = styled.button`
  background-color: ${backgroundColor};
  color: ${color};
  margin: ${spacing(3)}px;
  padding-left: ${spacing(5)}px;
  padding-right: ${spacing(5)}px;
  padding-top: ${spacing(3)}px;
  padding-bottom: ${spacing(3)}px;
  outline: 0;
  border: none;
  cursor: pointer;
  box-shadow: 0 0 0 ${spacing(1)}px ${basicColor};

  &:active {
    outline: 0;
    box-shadow: 0 0 0 ${spacing(2)}px ${basicColor};
  }

  ${({ disabled }) =>
    disabled &&
    `&:disabled {
      opacity: 0.3
    }`};
`;

const Button = ({ variant, tabIndex, disabled, children, ...other }) => {
  return (
    <BaseButton
      variant={variant}
      disabled={disabled}
      tabIndex={disabled ? "-1" : tabIndex}
      {...other}
    >
      {children}
    </BaseButton>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "success", "error"])
};

Button.defaultProps = {
  variant: "secondary"
};

export { Button };
