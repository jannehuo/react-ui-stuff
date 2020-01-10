import React from "react";

function Container(props) {
  return (
    <div className="view-1">
      <a
        href="https://dribbble.com/shots/3257243-IoT-navigation-for-smart-home-product-interaction"
        target="_blank"
        className="dribbble-link dribbble-link--white"
        rel="noopener noreferrer"
      >
        Dribble - Iot
      </a>
      {props.children}
    </div>
  );
}

export default Container;
