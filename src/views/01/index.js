import React, { Component } from "react";
import Container from "../../components/Container";
import Slider from "./components/Slider";
import "./css/app.css";

export default class View extends Component {
  render() {
    return (
      <Container
        color="white"
        link="https://dribbble.com/shots/3257243-IoT-navigation-for-smart-home-product-interaction"
        name="Iot Navigation"
      >
        <div className="app">
          <Slider />
        </div>
      </Container>
    );
  }
}
