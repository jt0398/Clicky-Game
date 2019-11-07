import React from "react";
import "./style.css";

function Score(props) {
  return (
    <ul className="navbar-nav mr-auto">
      <li className="nav-item px-5">
        {props.message
          ? "You guessed " + props.message
          : "Click an image to begin"}
      </li>
      <li className="nav-item">Score: {props.score}</li>
      <li className="nav-item">|</li>
      <li className="nav-item">Top Score {props.topScore}</li>
    </ul>
  );
}
export default Score;
