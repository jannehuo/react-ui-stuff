import React, { Component } from "react";
import Api from "../data/api";
import User from "./User";
import Views from "./Views";

export default class Quiz extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: undefined,
      views: undefined
    };
    this.updateUserData = this.updateUserData.bind(this);
    this.updateViewsData = this.updateViewsData.bind(this);
  }

  componentDidMount() {
    Promise.all([Api.getUserData(), Api.getViews()]).then(res => {
      this.updateUserData(res[0]);
      this.updateViewsData(res[1]);
    });
  }

  updateUserData(user) {
    this.setState({
      user
    });
  }

  updateViewsData(views) {
    this.setState({
      views
    });
  }

  render() {
    const { user, views } = this.state;
    return (
      <div className="quiz-container">
        <div className="app-container">
          <User data={user} />
          <Views data={views} />
        </div>
      </div>
    );
  }
}
