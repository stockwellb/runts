import React from "react";
import { storiesOf } from "@storybook/react";
import { Heading } from "./index";

storiesOf("Heading", module)
  .add("Default", () => <Heading>Heading 1</Heading>)
  .add("Default centered", () => <Heading align="center">Heading 1</Heading>)
  .add("Variant h1", () => <Heading variant="h1">Heading 1</Heading>)
  .add("Variant h2", () => <Heading variant="h2">Heading 2</Heading>)
  .add("Variant h3", () => <Heading variant="h3">Heading 3</Heading>)
  .add("Variant h4", () => <Heading variant="h4">Heading 4</Heading>)
  .add("Variant h5", () => <Heading variant="h5">Heading 5</Heading>)
  .add("Variant h6", () => <Heading variant="h6">Heading 6</Heading>);
