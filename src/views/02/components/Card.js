import React from "react";
import { BASE_URL } from "../constants";

const Card = props => {
  console.log(props);
  const { backdrop_path } = props;
  return (
    <div>
      <img src={`${BASE_URL}${backdrop_path}`} />
    </div>
  );
};

export default Card;
