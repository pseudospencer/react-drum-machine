import React, { Component } from 'react';

// Components
import Display from "./DisplayComponent";
import DrumPadArray from "./DrumPadArray";

// Styling
import "./DrumMachine.css";

// Samples, kits
import samples from "./KitSamples";
import kits from "./Kits";


const keyMappingOrder = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

const keysToSampleType = {
    "Q" : "crash", "W" : "perc", "E" : "cowbell",
    "A" : "tom", "S" : "clap", "D" : "openhat",
    "Z" : "kick", "X" : "snare", "C" : "hihat"
};

class DrumMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedKit : "kit_808",
            playing : null,
        };
        this.drumMachineNode = React.createRef();
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress );
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress() );
    }
    restartClipAndUpdateStateWithSampleName(clip, sampleName) {
        clip.pause();
        clip.currentTime = 0;
        clip.play();

        this.setState({
            playing : sampleName,
        });
    }
    handleClick(audioElId, sampleName) {
        const clip = document.getElementById(audioElId);

        this.restartClipAndUpdateStateWithSampleName(clip, sampleName);
    }
    handleKeyPress(e) {
        const key = e.key.toUpperCase();

        if ( key in keysToSampleType) {
            const clip = document.getElementById(key);
            const sampleName = kits[this.state.selectedKit][keysToSampleType[key]];

            this.restartClipAndUpdateStateWithSampleName(clip, sampleName);
        }

    }
    render() {
        const kit = kits[this.state.selectedKit];

        return (
            <div id="drum-machine"
                ref={this.drumMachineNode}
                onKeyPress={ (event) => this.handleKeyPress(event) }
                tabIndex="0"
            >
                <div className="drum-pad-container">
                    <DrumPadArray
                        keyMappingOrder={keyMappingOrder}
                        keysToSampleType={keysToSampleType}
                        samples={samples}
                        kit={kit}
                        handleClick={(audioElId, sampleName) => this.handleClick(audioElId, sampleName)}
                    />
                </div>
                <div className="display-container">
                    <Display
                        clip={this.state.playing != null ? this.state.playing : kit.displayName}
                    />
                </div>
                {/* <div className="controls-container"></div> */}
            </div>
        );
    }
}

export default DrumMachine;
