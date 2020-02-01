import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/main-nav.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.open = this.open.bind(this);
  }

  open(e) {
    e.preventDefault();
    this.setState(prevState => ({
      open: !prevState.open
    }));
  }

  render() {
    const { open } = this.state;
    return (
      <React.Fragment>
        <nav className="main-nav">
          <button
            className={open ? `open-nav open` : `open-nav`}
            onClick={this.open}
          >
            <i className="fas fa-bars button-icon icon-open"></i>
            <i className="fas fa-times button-icon icon-close"></i>
          </button>
          <div className={open ? `link-container open` : `link-container`}>
            <div className={open ? `bg-ball open` : `bg-ball`} />
            <div className="flex-container full-height-centered column">
              <div className="app-links">
                <Link className="main-nav-item" to="/01">
                  WIP: IoT navigation
                </Link>
              </div>
              <div className="info-links">
                <a
                  className="main-nav-item"
                  href="https://www.jannehuotari.fi/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-user-circle"></i> Creator
                </a>
                <a
                  className="main-nav-item"
                  href="https://github.com/jannehuo/react-ui-stuff"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> GitHub
                </a>
              </div>
            </div>
          </div>
        </nav>
        <div className="flex-container full-height-centered">
          <p className="intro-text">
            User interface experiments from{" "}
            <a
              href="http://dribbble.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dribbble
            </a>
          </p>
        </div>
      </React.Fragment>
    );
  }
}
