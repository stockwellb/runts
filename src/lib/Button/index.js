import React from "react";
import styled from "styled-components";

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
    border-width: ${theme.spacing.unit * 1}px;
    border-style: solid;
    border-color: ${theme.palette.primary.main};`;

const StyledButton = styled.button`
  padding-left: ${({ theme }) => theme.spacing.unit * 4}px;
  padding-right: ${({ theme }) => theme.spacing.unit * 4}px;
  padding-top: ${({ theme }) => theme.spacing.unit * 2}px;
  padding-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
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
    box-shadow: 0 0 0 ${({ theme }) => theme.spacing.unit * 1}px;
    ${({ theme }) => theme.palette.primary.main};
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
