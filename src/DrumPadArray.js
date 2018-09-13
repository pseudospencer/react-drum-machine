import React, { Component } from "react";
import DrumPad from "./DrumPadComponent";
import "./DrumPadArray.css"

class DrumPadArray extends Component {
    renderPad(k) {
        const id = this.props.keysToSampleType[k];
        const sampleName = this.props.kit[id];
        const src = this.props.samples[sampleName];

        return (
            <DrumPad
                key={k}
                assignedKey={k}
                id={id}
                clipSrc={src}
                onClick={() => this.props.handleClick(k, sampleName)}
            />
        );
    }
    createPads() {
        const keyMapping = this.props.keyMappingOrder;

        const rows = [];
        for (let r = 0; r < 3; r++) {
            let pads = [];
            for (let c = 0; c < 3; c++) {
                const keyAssignment = keyMapping[3 * r + c];
                pads.push(this.renderPad(keyAssignment));
            }
            rows.push(<div className="pad-row">{pads}</div>);
        }
        return rows;
    }
    render() {
        return (
            <div className="drum-pad-array">
                {this.createPads()}
            </div>
        );
    }
}

export default DrumPadArray;
