import React from "react";
import Score from "../Score";

function Nav(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand h1" href="/">
          Clicky Game
        </a>
        <Score
          message={props.message}
          score={props.score}
          topScore={props.topScore}
        />
      </div>
    </nav>
  );
}

export default Nav;
