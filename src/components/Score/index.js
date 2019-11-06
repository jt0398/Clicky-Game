import React from "react";

function Score(props) {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">{props.message}</li>
      <li className="nav-item">
        Score: {props.score}| Top Score {props.topScore}
      </li>
    </ul>
  );
}
export default Score;
