const Module = require('../module.js');
const data = Module.extractEnergyLvls('./data.txt');
const testData = Module.extractEnergyLvls('./testData.txt');

// ===============
// Day_11 - Part 1
// ===============

const DIRS = [
    [-1,-1], [-1, 0], [-1, 1],
    [ 0,-1],          [ 0, 1],
    [ 1,-1], [ 1, 0], [ 1, 1],
]

function isValidPos(array, pos) {
    return array[pos[0]] && array[pos[0]][pos[1]] ? true : false;
}

function increment(map, pos) {
    // recursive fn
    // if map[pos] is 9 => increment to 0 and recursively call self on all valid DIRS
    // else increment map[pos] +1
}

function simulateSingleStep(energyLvls) {
    let newEnergyLvls = energyLvls.map(row => row.slice());
    for(let i = 0; i < newEnergyLvls.length; i++) {
        for(let j = 0; j < newEnergyLvls[i].length; j++) {
            increment(newEnergyLvls, [i, j]);
        }
    }
    return newEnergyLvls;
}

function countFlashes(energyLvls) {
    let flashes = 0;
    energyLvls.forEach(row => row.forEach(num => num === 0 ? flashes++ : null));
    return flashes;
}

function simulateNumSteps(num) {
    let energyLvls = data.map(row => row.slice());
    let flashes = 0;
    for(let i = 0; i < num; i++) {
        let newEnergyLvls = simulateSingleStep(energyLvls);
        // flashes += countFlashes(newEnergyLvls);
    }
    // return flashes;
}

let flashes = simulateNumSteps(1);
console.log(flashes);

// ===============
// Day_11 - Part 2
// ===============


