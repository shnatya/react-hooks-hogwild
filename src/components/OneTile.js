import React, {useState} from "react";
import ExtraInfo from "./ExtraInfo"

function OneTile({hog}) {
    const [infoOff, setExtraInfo] = useState(false)

    function handleClick(){
        setExtraInfo(!infoOff)
    }
    return (
        <div className="pigTile" onClick={handleClick} >
            <p>{hog.name}</p>
            <img src={hog.image} alt="" />
            { infoOff ? <ExtraInfo hog={hog} /> : null }
        </div>
    )
}

export default OneTile;