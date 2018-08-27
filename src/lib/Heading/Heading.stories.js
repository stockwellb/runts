import React from "react";
import { storiesOf } from "@storybook/react";
import { ThemeProvider } from "../ThemeProvider";
import { Heading } from "./index";

storiesOf("Heading", module)
  .add("Default", () => (
    <ThemeProvider>
      <Heading>Heading 1</Heading>
    </ThemeProvider>
  ))
  .add("Default centered", () => (
    <ThemeProvider>
      <Heading align="center">Heading 1</Heading>
    </ThemeProvider>
  ))
  .add("Variant h1", () => (
    <ThemeProvider>
      <Heading variant="h1">Heading 1</Heading>
    </ThemeProvider>
  ))
  .add("Variant h2", () => (
    <ThemeProvider>
      <Heading variant="h2">Heading 2</Heading>
    </ThemeProvider>
  ))
  .add("Variant h3", () => (
    <ThemeProvider>
      <Heading variant="h3">Heading 3</Heading>
    </ThemeProvider>
  ))
  .add("Variant h4", () => (
    <ThemeProvider>
      <Heading variant="h4">Heading 4</Heading>
    </ThemeProvider>
  ))
  .add("Variant h5", () => (
    <ThemeProvider>
      <Heading variant="h5">Heading 5</Heading>
    </ThemeProvider>
  ))
  .add("Variant h6", () => (
    <ThemeProvider>
      <Heading variant="h6">Heading 6</Heading>
    </ThemeProvider>
  ));
