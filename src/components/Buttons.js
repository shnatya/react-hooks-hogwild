import React, {useState} from "react";

function Buttons({filterGreased, hogsNames, showThisPiggy}){
    const [greasedOff, setGreased] = useState(false);

	function handleButtonGreased(){
        filterGreased(!greasedOff)
		setGreased(!greasedOff)
	}
    function handleSelectName(event){
        showThisPiggy(event.target.value)
    }
    return (
    <><button className="buttonMargin"
            onClick={handleButtonGreased}>{greasedOff ? "Show All" : "Show Greased"}</button>
        <select name="Piggy name" onChange={handleSelectName}>
            <option value="Choose a piggy">Choose a piggy</option>
            {hogsNames.map(hogName => <option key={hogName} value={hogName}>{hogName}</option>)}
            
        </select>
    </>
    )
}

export default Buttons;