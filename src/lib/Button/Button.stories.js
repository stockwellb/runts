import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import { withKnobs, text, boolean, number } from "@storybook/addon-knobs";
import { Button } from "./index";
import { UpperCase } from "../index";

storiesOf("Button", module)
  .add("Default", () => <Button>Save</Button>)
  .add("Default disabled", () => <Button disabled>Save</Button>)
  .add("Primary", () => <Button primary>Save</Button>)
  .add("Primary disabled", () => (
    <Button disabled primary>
      Save
    </Button>
  ))
  .add("Primary upperCased", () => (
    <Button primary>
      <UpperCase>Save</UpperCase>
    </Button>
  ))
  .add("OnClick", () => (
    <Button primary onClick={action("button clicked")}>
      Save
    </Button>
  ));
