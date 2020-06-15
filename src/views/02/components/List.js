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
  prevSlide: null,
  direction: "",
  backgrounds: {
    current: "",
    next: "",
    prev: "",
  },
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = initalState;
    this.loadList = this.loadList.bind(this);
    this.getSliderBg = this.getSliderBg.bind(this);
    this.loadConfig = this.loadConfig.bind(this);
    this.updateSlider = this.updateSlider.bind(this);
    this.sliderClick = this.sliderClick.bind(this);
    this.getAnim = this.getAnim.bind(this);
    this.addAnimation = this.addAnimation.bind(this);
    this.animateBackGround = this.animateBackGround.bind(this);
    this.getBgAnim = this.getBgAnim.bind(this);
  }

  componentDidMount() {
    this.loadConfig();
  }

  loadConfig() {
    return fetch(CONFIG_API)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ config: json });
        this.loadList();
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  loadList() {
    return fetch(DATA_API)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ data: json });
        this.updateSlider(0, "slideInNext", "slideInNextBg");
        this.getSliderBg();
      })
      .catch((error) => {
        this.setState({ error: true });
      });
  }

  getSliderBg() {
    if (this.state.data && this.state.config) {
      const currentMovie = this.state.data.results[this.state.activeSlide];
      const nextMovie = this.state.data.results[this.state.nextSlide];
      const prevMovie = this.state.data.results[this.state.prevSlide];
      const imageBaseUrl = this.state.config.images.secure_base_url;
      this.setState({
        ...this.state,
        backgrounds: {
          current: `${imageBaseUrl}/w1280/${currentMovie.backdrop_path}`,
          next: `${imageBaseUrl}/w1280/${nextMovie.backdrop_path}`,
          prev: `${imageBaseUrl}/w1280/${prevMovie.backdrop_path}`,
        },
      });
    }
  }

  animateBackGround() {}

  updateSlider(active, animation, bgAnimation) {
    const itemsLn = this.state.data.results.length;
    let nextSlide = active + 1;
    let prevSlide = active - 1;

    if (active === 0) {
      prevSlide = itemsLn - 1;
    }

    if (active === itemsLn - 1) {
      nextSlide = 0;
    }

    this.setState(
      {
        ...this.state,
        activeSlide: active,
        nextSlide,
        prevSlide,
      },
      () => {
        this.getSliderBg();
        this.addAnimation(animation, bgAnimation);
      }
    );
  }

  sliderClick(e) {
    e.preventDefault();
    const current = e.currentTarget;
    const slideIndex = current.getAttribute("data-index");
    const isCurrentSlide = current.getAttribute("data-current") === "true";
    if (!isCurrentSlide) {
      const animation = this.getAnim(current);
      const bgAnimation = this.getBgAnim(current);
      this.updateSlider(parseInt(slideIndex, 10), animation, bgAnimation);
    }
  }

  getAnim(current) {
    const animation =
      current.getAttribute("data-next") === "true"
        ? "slideInNext"
        : "slideInPrev";
    return animation;
  }

  getBgAnim(current) {
    const animation =
      current.getAttribute("data-next") === "true"
        ? "slideInNextBg"
        : "slideInPrevBg";
    return animation;
  }

  addAnimation(animation, bgAnimation) {
    const current = document.querySelector(".card-container.current");
    const currentImg = document.querySelector(".slider-bg.current-bg");
    current.classList.add(animation);
    currentImg.classList.add(bgAnimation);
    currentImg.addEventListener("animationend", () => {
      currentImg.classList.remove(bgAnimation);
    });
  }

  render() {
    return (
      <div className="card-slider prev">
        <img
          src={this.state.backgrounds.current}
          className="slider-bg current-bg"
        />
        {this.state.data &&
          this.state.data.results.map((movie, i) => (
            <Card
              key={movie.id}
              title={movie.title}
              image={movie.backdrop_path}
              rating={movie.vote_average}
              current={i === this.state.activeSlide}
              next={i === this.state.nextSlide}
              prev={i === this.state.prevSlide}
              index={i}
              onClick={this.sliderClick}
            />
          ))}
      </div>
    );
  }
}

export default List;
