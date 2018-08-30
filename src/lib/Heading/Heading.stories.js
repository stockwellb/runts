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
  .add("h1", () => (
    <ThemeProvider>
      <Heading component="h1">Heading 1</Heading>
    </ThemeProvider>
  ))
  .add("h2", () => (
    <ThemeProvider>
      <Heading component="h2">Heading 2</Heading>
    </ThemeProvider>
  ))
  .add("h3", () => (
    <ThemeProvider>
      <Heading component="h3">Heading 3</Heading>
    </ThemeProvider>
  ))
  .add("h4", () => (
    <ThemeProvider>
      <Heading component="h4">Heading 4</Heading>
    </ThemeProvider>
  ))
  .add("h5", () => (
    <ThemeProvider>
      <Heading component="h5">Heading 5</Heading>
    </ThemeProvider>
  ))
  .add("h6", () => (
    <ThemeProvider>
      <Heading component="h6">Heading 6</Heading>
    </ThemeProvider>
  ))
  .add("All variants", () => (
    <ThemeProvider>
      <React.Fragment>
        <Heading component="h1" variant="primary">
          Heading 1
        </Heading>
        <Heading component="h1" variant="secondary">
          Heading 2
        </Heading>
        <Heading component="h1" variant="error">
          Heading 3
        </Heading>
        <Heading component="h1" variant="success">
          Heading 4
        </Heading>
      </React.Fragment>
    </ThemeProvider>
  ));
