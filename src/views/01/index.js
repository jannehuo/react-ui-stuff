import React, { Component } from "react";
import Container from "./components/Container";
import Slider from "./components/Slider";
import "./css/app.css";

export default class View extends Component {
  render() {
    return (
      <Container>
        <div className="app">
          <Slider />
        </div>
      </Container>
    );
  }
}
