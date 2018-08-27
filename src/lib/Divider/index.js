import React from "react";
import styled from "styled-components";

const StyledDivider = styled.hr`
  border: 0;
  border-bottom: 1px;
  border-style: solid;
  opacity: 0.8;
  border-color: ${({ theme }) => theme.palette.primary.main};
`;

const Divider = () => <StyledDivider />;

export { Divider };
