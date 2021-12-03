import React from "react";
import OneTile from "./OneTile";

function Tiles({hogsToDispaly}){
    

    return (
        <div className="ui grid container">
                {hogsToDispaly.map(hog => <OneTile hog={hog} key={hog.name}/>)}
        </div>
    )
}

export default Tiles;