import React from "react";

function Skeleton(props) {
  const { w, h, color } = props;
  return (
    <span
      className="skeleton"
      style={{ width: `${w}`, height: `${h}`, background: `${color}` }}
    />
  );
}

export default Skeleton;
