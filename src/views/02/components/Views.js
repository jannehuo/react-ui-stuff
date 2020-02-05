import React, { Component } from "react";
import Skeleton from "./Skeleton";

export default class Views extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { data } = this.props;

    if (!data) {
      return (
        <div className="views-container">
          {[...Array(4)].map((v, i) => (
            <Skeleton w="" h="100%" color="#f2f2f2" className="view" />
          ))}
        </div>
      );
    }

    const ViewElement = ({ tag, name, icon }) => (
      <div className="view">
        <div className="row tag">{tag}</div>
        <div className="row name">{name}</div>
        <div className="row icon">{icon}</div>
      </div>
    );

    return (
      <div className="views-container">
        {data.map((view, i) => (
          <ViewElement {...view} key={i} />
        ))}
      </div>
    );
  }
}
