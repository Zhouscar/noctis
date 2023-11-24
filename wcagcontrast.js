const chroma = require("chroma-js");

function getDarker(foreground, background, minimum_contrast) {
    let current = chroma(foreground);
    while (chroma.contrast(current, background) < minimum_contrast) {
        current = current.darken(0.001);
    }
    return current.hex();
}

function getLighter(foreground, background, minimum_contrast) {
    let current = chroma(foreground);
    while (chroma.contrast(current, background) < minimum_contrast) {
        current = current.brighten(0.001);
    }
    return current.hex();
}

const ORIGINALS = {
    comment: "#7f659a",
      text: "#ccbfd9",
      keyword: "#df769b",
      variable: "#e4b781",
      annotation: "#d67e5c",
      constant: "#d5971a",
      tag: "#e66533",
      string: "#49e9a6",
      stringInterpolated: "#16b673",
      number: "#7060eb",
      function: "#16a3b6",
      support: "#49d6e9",
      misc: "#49ace9",
      invalid: "#e3541c"
};

const BACKGROUND = "#30243d";
const MINIMUM_CONTRAST = 4.5;

for (const [name, foreground] of Object.entries(ORIGINALS)) {
    console.log(`${name}: "${getLighter(foreground, BACKGROUND, MINIMUM_CONTRAST)}",`);
}
