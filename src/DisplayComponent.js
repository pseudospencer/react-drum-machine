import React from "react";
import "./DisplayComponent.css"

function Display(props) {
    return(
        <div id="display">
            <div className="display-screen">
                <p>{props.clip}</p>
            </div>
            <div className="display-label">
                <p>{props.label}</p>
            </div>
            {/* <div className="display-buttons"></div> */}
        </div>
    );
}

export default Display;
