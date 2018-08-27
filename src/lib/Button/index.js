import React from "react";
import styled from "styled-components";
import { spacing } from "../spacing";

const getColors = (theme, primary) =>
  primary
    ? `
      background: ${theme.palette.primary.main};
      color: ${theme.palette.secondary.main};
      `
    : `
      background: ${theme.palette.secondary.main};
      color: ${theme.palette.primary.main};
      `;

const border = theme => `
    border-width: ${spacing(1)};
    border-style: solid;
    border-color: ${theme.palette.primary.main};`;

const StyledButton = styled.button`
  padding-left: ${spacing(4)};
  padding-right: ${spacing(4)};
  padding-top: ${spacing(2)};
  padding-bottom: ${spacing(2)};
  ${({ theme, primary }) => getColors(theme, primary)};
  ${({ theme }) => border(theme)};
  &:disabled {
    opacity: 0.3;
  }
  &:hover {
    ${({ theme, disabled }) => (!disabled ? getColors(theme, true) : null)};
  }
  &:focus {
    outline: "none";
    box-shadow: 0 0 0 ${spacing(1)} ${({ theme }) => theme.palette.primary.main};
  }
`;

const Button = ({ tabIndex, disabled, children, ...other }) => (
  <StyledButton
    tabIndex={disabled ? "-1" : tabIndex}
    disabled={disabled}
    {...other}
  >
    {children}
  </StyledButton>
);

export { Button };
