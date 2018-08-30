import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "../ThemeProvider";
import { Divider } from "./index";

storiesOf("Divider", module).add("Default", () => (
  <ThemeProvider>
    <React.Fragment>
      <Divider variant="primary" />
      <Divider variant="secondary" />
      <Divider variant="error" />
      <Divider variant="success" />
    </React.Fragment>
  </ThemeProvider>
));
