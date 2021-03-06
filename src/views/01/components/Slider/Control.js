import React, { Component } from "react";
import Inner from "./Inner";

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default class Outer extends Component {
  constructor(props, context) {
    super(props, context);
    this.minVal = 16;
    this.maxVal = 28;
    this.numberHeight = 120;
    this.inner = React.createRef();
    this.maxAngle = 90; // degrees
    this.initialValue = 22;
    this.initialTransform = -1320;
    this.state = {
      angle: 0, // radians
      sliderVal: 0,
      numberHeight: 0,
      initialTransform: 0,
      inner: {
        x: 0,
        y: 0
      },
      transforms: {
        num0: 0,
        num1: 0
      }
    };
    this.mouseDown = this.mouseDown.bind(this);
    this.mouseUp = this.mouseUp.bind(this);
    this.rotate = this.rotate.bind(this);
    this.stop = this.stop.bind(this);
    this.radianToDegree = this.radianToDegree.bind(this);
    this.calculateSliderVal = this.calculateSliderVal.bind(this);
    this.handleTouch = this.handleTouch.bind(this);
    this.splitValue = this.splitValue.bind(this);
    this.getValueForSlider = this.getValueForSlider.bind(this);
    this.roll = this.roll.bind(this);
    this.getNumberHeight = this.getNumberHeight.bind(this);
    this.getInitialTransform = this.getInitialTransform.bind(this);
    this.initSpinners = this.initSpinners.bind(this);
  }

  componentDidMount() {
    const innerRect = this.inner.current.getBoundingClientRect();
    this.setState(
      {
        ...this.state,
        sliderVal: this.initialValue,
        inner: {
          ...this.state.inner,
          x: innerRect.left + innerRect.width / 2,
          y: innerRect.top + innerRect.height / 2
        }
      },
      () => {
        this.initSpinners();
      }
    );
  }

  getNumberHeight() {
    const numberElement = document.querySelector(".spinner div");
    return numberElement.offsetHeight;
  }

  getInitialTransform(numberH) {
    const numberElements = document.querySelectorAll("#spinner-1 div");
    let initialValueIndex;
    numberElements.forEach((el, i) => {
      if (el.dataset.initial === "true") {
        initialValueIndex = i;
      }
    });
    return -1 * (initialValueIndex * numberH);
  }

  initSpinners() {
    const numberHeight = this.getNumberHeight();
    const initialTransform = this.getInitialTransform(numberHeight);
    this.setState({
      ...this.state,
      numberHeight,
      initialTransform,
      transforms: {
        num0: initialTransform,
        num1: initialTransform
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

  handleTouch(e) {
    const toucheEvent = e.nativeEvent.touches[0];
    this.rotate(toucheEvent);
  }

  radianToDegree(val) {
    return (val * 180) / Math.PI;
  }

  calculateSliderVal(degrees) {
    /** Returns value between -6 and 6 */
    const controlValue = this.getValueForSlider(degrees);
    const sliderVal = this.initialValue + controlValue;
    this.setState({
      ...this.state,
      sliderVal
    });
    this.roll(controlValue);
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

  splitValue(value) {
    return value
      .toString()
      .split("")
      .map(val => parseInt(val, 10));
  }

  getValueForSlider(degrees) {
    return Math.round(degrees / 10 / 1.5);
  }

  roll(control) {
    const { sliderVal, numberHeight, initialTransform } = this.state;
    const singleDigitDifference = sliderVal - this.initialValue;
    const firstDigitDifference =
      this.splitValue(sliderVal)[0] - this.splitValue(this.initialValue)[0];
    const newValue1 = initialTransform - singleDigitDifference * numberHeight;
    const newValue0 = initialTransform - firstDigitDifference * numberHeight;
    this.setState({
      ...this.state,
      transforms: {
        num0: newValue0,
        num1: newValue1
      }
    });
  }

  render() {
    const {
      angle,
      transforms: { num0, num1 },
      numberHeight
    } = this.state;
    const initialNumbers = this.splitValue(this.initialValue);
    const Nums = ({ values }) => {
      return (
        <React.Fragment>
          {values.slice(1, values.length).map((val, i) => (
            <div key={val}>{val}</div>
          ))}
          {values.map((val, i) => (
            <div data-initial={initialNumbers.includes(val)} key={val}>
              {val}
            </div>
          ))}
        </React.Fragment>
      );
    };

    return (
      <div
        className="slider-outer-circle"
        onMouseDown={this.mouseDown}
        onTouchMove={this.handleTouch}
      >
        <div className="min">
          <span>cold</span>
        </div>
        <div className="max">
          <span>hot</span>
        </div>
        <Inner rotate={angle} ref={this.inner} />
        <div className="slider-value">
          <div
            className="number-spinner-container"
            style={{ height: `${numberHeight}px` }}
          >
            <span
              className="spinner"
              style={{ transform: `translateY(${num0}px)` }}
              id="spinner-1"
            >
              <Nums values={values} />
            </span>
            <span
              className="spinner spinner-2"
              style={{ transform: `translateY(${num1}px)` }}
              id="spinner-2"
            >
              <Nums values={values} />
            </span>
          </div>
        </div>
      </div>
    );
  }
}
