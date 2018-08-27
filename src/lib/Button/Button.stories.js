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
      <Button primary>Save</Button>
    </ThemeProvider>
  ))
  .add("Primary disabled", () => (
    <ThemeProvider>
      <Button disabled primary>
        Save
      </Button>
    </ThemeProvider>
  ))
  .add("Primary upperCased", () => (
    <ThemeProvider>
      <Button primary>
        <UpperCase>Save</UpperCase>
      </Button>
    </ThemeProvider>
  ))
  .add("OnClick", () => (
    <ThemeProvider>
      <Button primary onClick={action("button clicked")}>
        Save
      </Button>
    </ThemeProvider>
  ));
