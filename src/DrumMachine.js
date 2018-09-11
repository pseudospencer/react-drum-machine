import React, { Component } from 'react';
import Display from "./DisplayComponent";
import DrumPadArray from "./DrumPadArray";

class DrumMachine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keyMappingOrder : ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"],
            keysToSampleType: {
                "Q" : "crash", "W" : "perc", "E" : "cowbell",
                "A" : "tom", "S" : "clap", "D" : "openhat",
                "Z" : "kick", "X" : "snare", "C" : "hihat"
            },
            selectedKit : "kit_808",
            kitSamples : {
                kit_808 : {
                    clap : "clap-808.wav",
                    cowbell : "cowbell-808.wav",
                    crash : "crash-808.wav",
                    hihat : "hihat-808.wav",
                    kick : "kick-808.wav",
                    openhat : "openhat-808.wav",
                    perc : "perc-808.wav",
                    snare : "snare-808.wav",
                    tom : "tom-808.wav"
                },
            },
        };
    }
    render() {
        const keyMappingOrder = this.state.keyMappingOrder;
        const keysToSampleType = this.state.keysToSampleType;
        const currentKit = this.state.selectedKit;
        const currentKitSamples = this.state.kitSamples[currentKit];
        const currentSampleDir = "./samples/" + currentKit + "/";

        return (
            <div id="drum-machine">
                <div className="drum-pad-container">
                    <DrumPadArray
                        keyMappingOrder={keyMappingOrder}
                        keysToSampleType={keysToSampleType}
                        kitSamples={currentKitSamples}
                        sampleDir={currentSampleDir}
                    />
                </div>
                <div className="display-container">
                    <Display clip="x-clip"/>
                </div>
                <div className="controls-container">

                </div>
            </div>
        );
    }
}

export default DrumMachine;
