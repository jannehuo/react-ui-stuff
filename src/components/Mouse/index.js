import React, { Component } from "react";

export default class Mouse extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      x: 0,
      y: 0
    };
    this.handleMove = this.handleMove.bind(this);
  }

  handleMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY
    });
  }

  render() {
    return (
      <div style={{ height: "100%" }} onMouseMove={this.handleMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}
