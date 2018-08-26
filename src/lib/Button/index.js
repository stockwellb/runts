import React from "react";
import styled from "styled-components";
import * as colors from "../colors";
import { spacing } from "../spacing";

const hoverColor = disabled =>
  !disabled
    ? `
        background: ${colors.PRIMARY};
        color: ${colors.SECONDARY};
        `
    : null;

const StyledButton = styled.button`
  padding-left: ${spacing(4)};
  padding-right: ${spacing(4)};
  padding-top: ${spacing(2)};
  padding-bottom: ${spacing(2)};
  background: ${({ primary }) => (primary ? colors.PRIMARY : colors.SECONDARY)};
  color: ${({ primary }) => (primary ? colors.SECONDARY : colors.PRIMARY)};
  border-width: ${spacing(1)};
  &:disabled {
    opacity: 0.3;
  }
  border-style: solid;
  border-color: ${colors.PRIMARY};
  &:hover {
    ${({ disabled }) => hoverColor(disabled)};
  }
  &:focus {
    outline: "none";
    box-shadow: 0 0 0 ${spacing(1)} ${colors.PRIMARY};
  }
`;

class Button extends React.Component {
  render() {
    const { tabIndex, disabled, children, ...other } = this.props;

    return (
      <StyledButton
        tabIndex={disabled ? "-1" : tabIndex}
        disabled={disabled}
        {...other}
      >
        {children}
      </StyledButton>
    );
  }
}

export { Button };
