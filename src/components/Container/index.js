import React from "react";

function Container(props) {
  const { link, color, name, style } = props;
  return (
    <div className="page-container" style={style}>
      <a
        href={link}
        target="_blank"
        className={`dribbble-link dribbble-link--${color ? color : ""}`}
        rel="noopener noreferrer"
      >
        {name}
      </a>
      {props.children}
    </div>
  );
}

export default Container;
