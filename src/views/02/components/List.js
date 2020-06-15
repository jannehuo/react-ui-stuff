import React, { Component } from "react";
import Card from "./Card";
import { DATA_API, CONFIG_API } from "../constants";
import "../css/card.css";

const initalState = {
  data: null,
  error: false,
  config: null,
  activeSlide: 0,
  nextSlide: null,
  prevSlide: null
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = initalState;
    this.loadList = this.loadList.bind(this);
    this.getZindex = this.getZindex.bind(this);
    this.getSliderBg = this.getSliderBg.bind(this);
    this.loadConfig = this.loadConfig.bind(this);
    this.updateSlider = this.updateSlider.bind(this);
  }

  componentDidMount() {
    this.loadConfig();
  }

  loadConfig() {
    return fetch(CONFIG_API)
      .then(response => response.json())
      .then(json => {
        this.setState({ config: json });
        this.loadList();
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  loadList() {
    return fetch(DATA_API)
      .then(response => response.json())
      .then(json => {
        this.setState({ data: json });
        this.updateSlider();
      })
      .catch(error => {
        this.setState({ error: true });
      });
  }

  getZindex(i) {
    const itemsLn = this.state.data.results.length;
    const zIndex = itemsLn - i;
    return zIndex;
  }

  getSliderBg() {
    if (this.state.data && this.state.config) {
      const currentMovie = this.state.data.results[this.state.activeSlide];
      const { backdrop_path } = currentMovie;
      const imageBaseUrl = this.state.config.images.secure_base_url;
      return `${imageBaseUrl}/w1280/${backdrop_path}`;
    }
    return "";
  }

  updateSlider() {
    const itemsLn = this.state.data.results.length;
    let nextSlide = this.state.activeSlide + 1;
    let prevSlide = this.state.activeSlide - 1;

    if (this.state.activeSlide === 0) {
      prevSlide = itemsLn - 1;
    }

    if (this.state.activeSlide === itemsLn - 1) {
      nextSlide = 0;
    }

    this.setState({
      ...this.state,
      nextSlide,
      prevSlide
    });
  }

  render() {
    const sliderbg = this.getSliderBg();
    const style = {
      backgroundImage: `url(${sliderbg})`
    };
    console.log(this.state);
    return (
      <div className="card-slider" style={style}>
        {this.state.data &&
          this.state.data.results.map((movie, i) => (
            <Card
              key={movie.id}
              title={movie.title}
              image={movie.backdrop_path}
              rating={movie.vote_average}
              zIndex={this.getZindex(i)}
              current={i === this.state.activeSlide}
              next={i === this.state.nextSlide}
              prev={i === this.state.prevSlide}
            />
          ))}
      </div>
    );
  }
}

export default List;
