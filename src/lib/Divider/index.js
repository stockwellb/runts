import React from "react";
import styled from "styled-components";
import * as colors from "../colors";

const StyledDivider = styled.hr`
  border: 0;
  border-bottom: 1px;
  border-style: solid;
  opacity: 0.8;
  border-color: ${colors.PRIMARY};
`;

const Divider = () => <StyledDivider />;

export { Divider };
