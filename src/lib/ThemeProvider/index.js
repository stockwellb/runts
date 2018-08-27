import React from "react";
import { ThemeProvider as Provider } from "styled-components";

class ThemeProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palette: {
        primary: {
          main: "blue",
          contrast: "white"
        },
        secondary: {
          main: "white",
          contrast: "black"
        },
        success: {
          main: "green",
          contrast: "white"
        },
        error: {
          main: "red",
          contrast: "white"
        }
      }
    };
  }
  render() {
    return (
      <Provider theme={this.props.theme || this.state}>
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeProvider };
