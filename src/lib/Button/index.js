import React from "react";
import styled from "styled-components";

const BaseButton = styled.button`
  padding-left: ${({ theme }) => theme.spacing.unit * 4}px;
  padding-right: ${({ theme }) => theme.spacing.unit * 4}px;
  padding-top: ${({ theme }) => theme.spacing.unit * 2}px;
  padding-bottom: ${({ theme }) => theme.spacing.unit * 2}px;
  border-width: ${({ theme }) => theme.spacing.unit * 1}px;
  border-type: solid;
  border-color: ${({ theme }) => theme.palette.primary.main};
`;

const PrimaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.palette.primary.main};
  color: ${({ theme }) => theme.palette.secondary.main};
`;

const SecondaryButton = styled(BaseButton)`
  background: ${({ theme }) => theme.palette.secondary.main};
  color: ${({ theme }) => theme.palette.primary.main};
`;

const ErrorButton = styled(BaseButton)`
  background: ${({ theme }) => theme.palette.error.main};
  color: ${({ theme }) => theme.palette.error.contrast};
`;

const SuccessButton = styled(BaseButton)`
  background: ${({ theme }) => theme.palette.success.main};
  color: ${({ theme }) => theme.palette.success.contrast};
`;

const makeDisabled = base =>
  styled(base)`
    &:disabled {
      opacity: 0.3;
    }
  `;

const makeButton = (base, disabled, addHover = false) => {
  if (disabled) {
    return makeDisabled(base);
  }

  let Button = styled(base)`
    &:focus {
      outline: "none";
      box-shadow: 0 0 0 ${({ theme }) => theme.spacing.unit * 1}px;
      ${({ theme }) => theme.palette.primary.main};
    }
  `;

  if (addHover) {
    Button = styled(Button)`
      &:hover {
        background: ${({ theme }) => theme.palette.primary.main};
        color: ${({ theme }) => theme.palette.secondary.main};
      }
    `;
  }
  return Button;
};

const Button = ({ variant, tabIndex, disabled, children, ...other }) => {
  let Component;

  if (variant === "primary") {
    Component = makeButton(PrimaryButton, disabled);
  } else if (variant === "secondary") {
    Component = makeButton(SecondaryButton, disabled, true);
  } else if (variant === "error") {
    Component = makeButton(ErrorButton, disabled);
  } else if (variant === "success") {
    Component = makeButton(SuccessButton, disabled);
  } else {
    Component = makeButton(SecondaryButton, disabled, true);
  }

  return (
    <Component
      disabled={disabled}
      tabIndex={disabled ? "-1" : tabIndex}
      {...other}
    >
      {children}
    </Component>
  );
};

export { Button };
