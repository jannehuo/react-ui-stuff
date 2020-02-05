import React from "react";

function Skeleton(props) {
  const { w, h, color, className } = props;
  return (
    <span
      className={`skeleton ${className}`}
      style={{ width: `${w}`, height: `${h}`, background: `${color}` }}
    />
  );
}

export default Skeleton;
