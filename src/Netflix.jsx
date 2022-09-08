import React from "react";
import Data from "./Data";
import Card from "./Card";

const Netflix = () => {
  return (
    (
      <Card
        key={Data[0].id}
        imgsrc={Data[0].imgsrc}
        titel={Data[0].titel}
        snma={Data[0].snma}
        link={Data[0].link}
      />
    ),
    (
      <Card
        key={Data[1].id}
        imgsrc={Data[1].imgsrc}
        titel={Data[1].titel}
        snma={Data[1].snma}
        link={Data[1].link}
      />
    ),
    (
      <Card
        key={Data[2].id}
        imgsrc={Data[2].imgsrc}
        titel={Data[2].titel}
        snma={Data[2].snma}
        link={Data[2].link}
      />
    ),
    (
      <Card
        key={Data[4].id}
        imgsrc={Data[4].imgsrc}
        titel={Data[4].titel}
        snma={Data[4].snma}
        link={Data[4].link}
      />
    )
  );
};
export default Netflix;
