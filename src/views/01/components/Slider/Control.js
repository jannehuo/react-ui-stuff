import React, { Component } from "react";
import Inner from "./Inner";

export default class Outer extends Component {
  constructor(props, context) {
    super(props, context);
    this.inner = React.createRef();
    this.maxAngle = 90; // degrees
    this.initialValue = 22;
    this.state = {
      angle: 0, // radians
      sliderVal: 0,
      inner: {
        x: 0,
        y: 0
      }
    };
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.rotate = this.rotate.bind(this);
    this.stop = this.stop.bind(this);
    this.radianToDegree = this.radianToDegree.bind(this);
    this.calculateSliderVal = this.calculateSliderVal.bind(this);
  }

  componentDidMount() {
    const innerRect = this.inner.current.getBoundingClientRect();
    this.setState({
      ...this.state,
      sliderVal: this.initialValue,
      inner: {
        ...this.state.inner,
        x: innerRect.left + innerRect.width / 2,
        y: innerRect.top + innerRect.height / 2
      }
    });
  }

  mouseDown(e) {
    document.addEventListener("mousemove", this.rotate);
    document.addEventListener("mouseup", this.stop);
  }

  mouseUp(e) {
    this.stop();
  }

  radianToDegree(val) {
    return (val * 180) / Math.PI;
  }

  calculateSliderVal(degrees) {
    const roundedControlValue = Math.round(degrees / 10 / 1.5);
    this.setState({
      ...this.state,
      sliderVal: this.initialValue + roundedControlValue
    });
  }

  rotate(e) {
    const { clientX, clientY } = e;
    const {
      inner: { x, y }
    } = this.state;
    const angle = Math.atan2(clientY - y, clientX - x);
    const angleInDegrees = this.radianToDegree(angle);
    if (angleInDegrees >= -this.maxAngle && angleInDegrees <= this.maxAngle) {
      this.calculateSliderVal(angleInDegrees);
      this.setState({
        ...this.state,
        angle
      });
    }
  }

  stop() {
    document.removeEventListener("mousemove", this.rotate);
  }

  render() {
    const { angle, sliderVal } = this.state;
    return (
      <div className="slider-outer-circle" onMouseDown={this.mouseDown}>
        <div className="min">
          <span>cold</span>
        </div>
        <div className="max">
          <span>hot</span>
        </div>
        <Inner rotate={angle} ref={this.inner} />
        <div className="slider-value">{sliderVal}</div>
      </div>
    );
  }
}
