import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Button } from "./index";
import { ThemeProvider } from "../ThemeProvider";
import { UpperCase } from "../index";

storiesOf("Button", module)
  .add("Default", () => (
    <ThemeProvider>
      <Button>Save</Button>
    </ThemeProvider>
  ))
  .add("Default disabled", () => (
    <ThemeProvider>
      <Button disabled>Save</Button>
    </ThemeProvider>
  ))
  .add("Primary", () => (
    <ThemeProvider>
      <Button variant="primary">Save</Button>
    </ThemeProvider>
  ))
  .add("Primary disabled", () => (
    <ThemeProvider>
      <Button disabled variant="primary">
        Save
      </Button>
    </ThemeProvider>
  ))
  .add("Primary upperCased", () => (
    <ThemeProvider>
      <Button variant="primary">
        <UpperCase>Save</UpperCase>
      </Button>
    </ThemeProvider>
  ))
  .add("All", () => (
    <ThemeProvider>
      <React.Fragment>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Save</Button>
        <Button variant="error">Save</Button>
        <Button variant="success">Save</Button>
      </React.Fragment>
    </ThemeProvider>
  ))
  .add("OnClick", () => (
    <ThemeProvider>
      <Button variant="primary" onClick={action("button clicked")}>
        Save
      </Button>
    </ThemeProvider>
  ));
