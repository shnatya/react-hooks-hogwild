import React from "react";

function ExtraInfo({hog}) {
    return  (
        <div className="normalText ul">
            <p>Specialty: {hog.specialty}</p>
            <p>Greased: {hog.greased ? "Yes" : "No"}</p>
            <p>Weight: {hog.weight}</p>
            <p>Highest medal achieved: {hog['highest medal achieved']}</p>
        </div>
    )
}

export default ExtraInfo;