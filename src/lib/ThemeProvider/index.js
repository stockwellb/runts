import React from "react";
import { ThemeProvider as Provider } from "styled-components";

class ThemeProvider extends React.Component {
  render() {
    return <Provider theme={{ mode: "main" }}>{this.props.children}</Provider>;
  }
}

export { ThemeProvider };
