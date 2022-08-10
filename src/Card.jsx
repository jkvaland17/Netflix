import React from "react";
function Card(props) {
  return (
    <div className="container">
      <div className="card">
        <img src={props.imgsrc} alt="Avatar" />
        <h2>{props.titel}</h2>
        <h3>{props.snma}</h3>
        <a href={props.link} target="_blank" rel="noreferrer">
          <button>Watch Now</button>
        </a>
      </div>
    </div>
  );
}

export default Card;
