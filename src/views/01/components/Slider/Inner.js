import React from "react";

const Inner = React.forwardRef((props, ref) => (
  <div
    style={{ transform: `translate(-50%, -50%) rotate(${props.rotate}rad)` }}
    className="slider-inner-circle"
    ref={ref}
  />
));

export default Inner;
