import React from "react";
import List from "./components/List";

function View() {
  return (
    <React.Fragment>
      <a
        href="https://dribbble.com/shots/8257559-Movie-2-0"
        target="_blank"
        className="dribbble-link dribbble-link-"
        rel="noopener noreferrer"
      >
        Movie 2.0
      </a>
      <List />
    </React.Fragment>
  );
}

export default View;
