import React, { Component } from "react";
import Card from "./Card";
import { DATA_API, ACCESS_TOKEN } from "../constants";

const initalState = {
  data: null,
  error: false
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = initalState;
    this.loadList = this.loadList.bind(this);
  }
  componentDidMount() {
    this.loadList();
  }
  loadList() {
    fetch(DATA_API)
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json });
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }
  render() {
    return (
      <div>
        {this.state.data &&
          this.state.data.results.map(movie => (
            <Card key={movie.id} {...movie} />
          ))}
      </div>
    );
  }
}

export default List;
