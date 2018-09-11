import React, { Component } from 'react';
import "./DrumPadComponent.css";

function DrumPad(props) {
    return (
        <div className="drum-pad"
            id={props.id}
        >
            {props.assignedKey}

            <audio className="clip"
                src={props.clipSrc}
                id={props.assignedKey}
            ></audio>

        </div>
    )
}

export default DrumPad;
