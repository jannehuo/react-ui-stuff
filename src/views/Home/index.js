import React from "react";
import { Link } from "react-router-dom";
import "../../css/main-nav.css";

function Home() {
  return (
    <div className="main-nav">
      <Link className="main-nav-item" to="/01">
        01
      </Link>
    </div>
  );
}

export default Home;
