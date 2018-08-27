import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "../ThemeProvider";
import { Divider } from "./index";

storiesOf("Divider", module).add("Default", () => (
  <ThemeProvider>
    <Divider />
  </ThemeProvider>
));
