import React from "react";
import "./DisplayComponent.css"

function Display(props) {
    return(
        <div id="display">
            <p>{props.clip}</p>
        </div>
    );
}

export default Display;
