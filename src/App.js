import React, { Component } from "react";
import "../styles/App.css";

export default class App extends Component {
  componentDidUpdate(prevState) {
    if (
      typeof this.props.match.params.id === "undefined" &&
      prevState.location.pathname !== "/"
    ) {
      window.location.reload();
    }
  }
  render() {
    return <div className="App" />;
  }
}
