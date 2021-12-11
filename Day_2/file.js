const Module = require('../module.js');
const data = Module.extractDirs('./data.txt');

// ==============
// Day 2 - Part 1
// ==============
function calcHorizontalPos(dirs) {
    let x = 0;

    for(let i = 0; i < dirs.length; i++) {
        if(dirs[i][0] === "forward") {
            x += parseInt(dirs[i][1]);
        }
    }

    return x;
}

function calcVerticalPos(dirs) {
    let y = 0;

    for(let i = 0; i < dirs.length; i++) {
        if(dirs[i][0] === "up") {
            y -= parseInt(dirs[i][1]);
        } else if(dirs[i][0] === "down") {
            y += parseInt(dirs[i][1]);
        }
    }

    return y;
}

function calcFinalPos(pos) {
    return pos[0] * pos[1];
}

const x = calcHorizontalPos(data);
const y = calcVerticalPos(data);
const pos1 = [x, y];
const finalPos1 = calcFinalPos(pos1);

console.log(finalPos1);

// ==============
// Day 2 - Part 2
// ==============
function calcPosWithAim(dirs) {
    let x = 0;
    let y = 0;
    let aim = 0;

    for(let i = 0; i < dirs.length; i++) {
        const dir = dirs[i][0];
        const units = parseInt(dirs[i][1]);
        if(dir === "forward") {
            x += units;
            y += aim * units;
        } else if(dir === "up") {
            aim -= units;
        } else if(dir === "down") {
            aim += units;
        }
    }

    return [x, y];
}

const pos2 = calcPosWithAim(data);
const finalPos2 = calcFinalPos(pos2);

console.log(finalPos2);