import React from "react";

function CharacterCard(props) {
  return (
    <div className="card" onClick={props.handleCharClick}>
      <img src={props.image} className="img-fluid" alt="..." />
    </div>
  );
}

export default CharacterCard;
