import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";

ReactDOM.render(
  <>
    <h1 className="titel">Netflix Best Series 2022</h1>
    <Card
      imgsrc="https://m.media-amazon.com/images/M/MV5BZWRkYTU3MzktMjc4Mi00MTI0LWJmYWItYzhmMTRkZTcxMTVkXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_FMjpg_UX1000_.jpg"
      titel="A Netflix Orignal Series"
      snma="Archive 81"
      link="https://www.netflix.com/in/title/80222802"
    />
    <Card
      imgsrc="https://m.media-amazon.com/images/M/MV5BZjdjOWIxMDgtYTgwNS00MjE4LTliZWYtZGI1NDhhZmIyYjM1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg"
      titel="A Netflix Orignal Series"
      snma="After Life"
      link="https://www.netflix.com/in/title/80998491"
    />
    <Card
      imgsrc="https://m.media-amazon.com/images/M/MV5BZDUxMWNlMTUtYTljZS00MTE0LTlkYjktOTU1ODZjYzBhMTk0XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg"
      titel="A Netflix Orignal Series"
      snma="Ozark"
      link="https://www.netflix.com/in/title/80117552"
    />
    <Card
      imgsrc="https://m.media-amazon.com/images/M/MV5BM2QzMWM5OTgtZDE1MC00ZmMyLWIyODItMmQ4NjNlZGRjYTUzXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg"
      titel="A Netflix Orignal Series"
      snma="Inventing Anna"
      link="https://www.netflix.com/in/title/81008305"
    />
  </>,
  document.getElementById("root")
);
