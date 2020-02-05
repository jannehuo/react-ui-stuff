import React from "react";
import Skeleton from "./Skeleton";

function User(props) {
  const { data } = props;
  return (
    <div className="quiz-user">
      <div className="quiz-user-inforow">
        <h1 className="user-name">
          <div className="name-part">
            {data ? (
              data.firstname
            ) : (
              <Skeleton w="200px" h="72px" color="#f2f2f2" />
            )}
          </div>
          <div className="name-part">
            {data ? (
              data.lastname
            ) : (
              <Skeleton w="200px" h="72px" color="#f2f2f2" />
            )}
          </div>
        </h1>
      </div>
      <div className="quiz-user-inforow">
        <div className="stat">
          <p className="stat-name">Level</p>
          <p className="stat-value">
            {data ? (
              data.stats.level
            ) : (
              <Skeleton w="100%" h="54px" color="#f2f2f2" />
            )}
          </p>
        </div>
        <div className="stat">
          <p className="stat-name">Points</p>
          <p className="stat-value">
            {data ? (
              data.stats.points
            ) : (
              <Skeleton w="100%" h="54px" color="#f2f2f2" />
            )}
          </p>
        </div>
        <div className="stat">
          <p className="stat-name">Rank</p>
          <p className="stat-value">
            {data ? (
              data.stats.rank
            ) : (
              <Skeleton w="100%" h="54px" color="#f2f2f2" />
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default User;
