import React, { Component } from "react";
import DrumPad from "./DrumPadComponent";

class DrumPadArray extends Component {
    constructor(props) {
        super(props)
    }
    renderDrumPad(k) {
        return (
            <DrumPad
                assignedKey={k}
                id={this.props.keysToSampleType[k]}
                clipSrc={this.props.sampleDir+this.props.keysToSampleType[k]}
            />
        );
    }
    createPads() {
        const keyMapping = this.props.keyMappingOrder;

        const rows = [];
        for (let r = 0; r < 3; r++) {
            let pads = [];
            for (let c = 0; c < 3; c++) {
                pads.push(this.renderDrumPad(keyMapping[3 * r + c]))
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
