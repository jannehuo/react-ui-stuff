import React from "react";

function Container(props) {
  const { link, color, name } = props;
  return (
    <div className="view-1">
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
