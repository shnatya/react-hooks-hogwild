import React, { useState } from "react";
import Nav from "./Nav";
import Tiles from "./Tiles";
import Buttons from "./Buttons"

import hogs from "../porkers_data";

function App() {
	const [hogsToDispaly, setNewArray] = useState(hogs)

	function filterGreased(greasedOff){
		if(greasedOff){
            const newArray = hogs.filter(hog => (hog.greased) )
			setNewArray(newArray)
        }else{
            setNewArray(hogs)
        }	
	}
	const hogsNames = hogs.map(hog => {return hog.name})

	function showThisPiggy(piggysName){
		const newArray = hogs.filter(hog => (hog.name === piggysName))
		setNewArray(newArray)
	}
	
	return (
		<div className="App">
			<Nav />
			<Buttons filterGreased={filterGreased}
					 hogsNames={hogsNames}
					 showThisPiggy={showThisPiggy}/>
			<Tiles hogsToDispaly={hogsToDispaly} />
		</div>
	);
}

export default App;
