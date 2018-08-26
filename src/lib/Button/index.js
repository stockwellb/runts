import React from "react";
import styled from "styled-components";
import * as colors from "../colors";
import { spacing } from "../spacing";

const getColors = primary =>
  primary
    ? `
        background: ${colors.PRIMARY};
        color: ${colors.SECONDARY};
        `
    : `
        background: ${colors.SECONDARY};
        color: ${colors.PRIMARY};
        `;

const border = () => `
    border-width: ${spacing(1)};
    border-style: solid;
    border-color: ${colors.PRIMARY};`;

const StyledButton = styled.button`
  padding-left: ${spacing(4)};
  padding-right: ${spacing(4)};
  padding-top: ${spacing(2)};
  padding-bottom: ${spacing(2)};
  ${({ primary }) => getColors(primary)};
  ${border()};
  &:disabled {
    opacity: 0.3;
  }
  &:hover {
    ${({ disabled }) => (!disabled ? getColors(true) : null)};
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
