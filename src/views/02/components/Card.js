import React from "react";
import { BASE_URL } from "../constants";

const Card = props => {
  const { image, title, rating, zIndex, current, next, prev } = props;
  const style = {
    zIndex
  };
  let className = "card-container";
  if (current) {
    className = "card-container current";
  }
  if (next) {
    className = "card-container next";
  }
  if (prev) {
    className = "card-container prev";
  }
  return (
    <div className={className} style={style}>
      <div className="card-content">
        <img
          className="card-content-image"
          src={`${BASE_URL}${image}`}
          alt={title}
        />
        <div className="card-content-info">
          <div className="card-content-info-title">{title}</div>
          <div className="card-content-info-rating">
            <i className="fas fa-star"></i>
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
