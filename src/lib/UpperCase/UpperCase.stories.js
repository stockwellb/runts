import React from "react";
import { storiesOf } from "@storybook/react";
import { UpperCase } from "./index";

storiesOf("UpperCase", module)
.add("Default", () => <UpperCase>This should be in all caps</UpperCase>)
