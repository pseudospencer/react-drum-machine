import React from 'react';
import "./DrumPadComponent.css";

function DrumPad(props) {
    return (
        <div className="drum-pad"
            id={props.id}
            onClick={props.onClick}
        >
            {props.assignedKey}

            <audio className="clip"
                src={props.clipSrc}
                id={props.assignedKey}
                type="audio/wav"
            ></audio>

        </div>
    )
}

export default DrumPad;
