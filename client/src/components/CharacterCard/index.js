import React from "react";
import "./style.css";

function CharacterCard(props) {
  return (
    <div className="card shadow-sm" data-id={props.id} onClick={props.onClick}>
      <img src={props.image} alt="..." className="img-thumbnail" />
    </div>
  );
}

export default CharacterCard;
