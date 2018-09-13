function importAllSamples(r) {
    let samples = {};

    r.keys().map( (item, index) => {
        let formattedName = item.replace(".wav", "").replace(/\.\/.*\//,'');
        // console.log(item, formattedName, r(item) );
        samples[formattedName] = r(item);
    })

    return samples;
}

let samples = importAllSamples(require.context("./samples", true, /\.wav$/));

export default samples;
