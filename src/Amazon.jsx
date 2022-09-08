import React from "react";
import Data from "./Data";
import Card from "./Card";

const Amazon = () => {
    return (
        <Card
            key={Data[3].id}
            imgsrc={Data[3].imgsrc}
            titel={Data[3].titel}
            snma={Data[3].snma}
            link={Data[3].link}
        />,
        <Card
            key={Data[5].id}
            imgsrc={Data[5].imgsrc}
            titel={Data[5].titel}
            snma={Data[5].snma}
            link={Data[5].link}
        />
    );
}

export default Amazon;