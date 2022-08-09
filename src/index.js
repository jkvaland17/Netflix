import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";
import Data from "./Data";

function ncard(val) {
  return (
    <Card
      imgsrc={val.imgsrc}
      titel={val.titel}
      snma={val.snma}
      link={val.link}
    />
  );
}

ReactDOM.render(
  <>
    <h1 className="titel">Netflix Best Series 2022</h1>
    {Data.map(ncard)};
  </>,
  document.getElementById("root")
);
