import React, { Component } from "react";
import Api from "../data/api";
import User from "./User";
import Views from "./Views";

export default class Quiz extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      user: undefined
    };
    this.updateUserData = this.updateUserData.bind(this);
  }

  componentDidMount() {
    Api.getUserData().then(res => this.updateUserData(res));
  }

  updateUserData(user) {
    this.setState({
      user
    });
  }

  render() {
    const { user } = this.state;
    return (
      <div className="quiz-container">
        <div className="app-container">
          <User data={user} />
        </div>
      </div>
    );
  }
}
