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
    if(array[pos[0]] !== undefined && array[pos[0]][pos[1]] !== undefined) {
        return true;
    } else {
        return false;
    }
}

function incrementPos(map, pos) {
    let x = pos[0];
    let y = pos[1];
    if(isValidPos(map, pos)) {
        map[x][y] = map[x][y] + 1;
    }
}

function incrementAllPos(map) {
    for(let i = 0; i < map.length; i++) {
        for(let j = 0; j < map[i].length; j++) {
            incrementPos(map, [i, j]);
        }
    }
}

function dischargeFlash(map, pos) {
    // recursive fn
    // base case => is map[pos] is already 0, return
    // map[pos] = 0
    // go in all dirs and increment each pos
    // if any new dir pos reaches 10, dischargeFlash that pos
    let x = pos[0];
    let y = pos[1];
    map[x][y] = 0;
    DIRS.forEach(dir => {
        let x2 = x + dir[0];
        let y2 = y + dir[1];
        let newPos = [x2, y2];
        if(isValidPos(map, newPos)) {
            if(map[x2][y2] > 0) { 
                incrementPos(map, newPos)
            }
            if(map[x2][y2] >= 10) { 
                dischargeFlash(map, newPos);
            }
        }
    });
}

function simulateSingleStep(energyLvls) {
    incrementAllPos(energyLvls);
    for(let i = 0; i < energyLvls.length; i++) {
        for(let j = 0; j < energyLvls[i].length; j++) {
            if(energyLvls[i][j] === 10) {
                dischargeFlash(energyLvls, [i, j]);
            }
        }
    }
}

function countFlashes(energyLvls) {
    let flashes = 0;
    energyLvls.forEach(row => row.forEach(num => num === 0 ? flashes++ : null));
    return flashes;
}

function simulateNumSteps(map, num) {
    let energyLvls = map.map(row => row.slice());
    let flashes = 0;
    for(let i = 0; i < num; i++) {
        simulateSingleStep(energyLvls);
        flashes += countFlashes(energyLvls);
    }
    return flashes;
}

let flashes = simulateNumSteps(data, 100);
console.log(flashes);

// ===============
// Day_11 - Part 2
// ===============

// loop through steps until all array values are 0
function allZeros(map) {
    for(let i = 0; i < map.length; i++) {
        for(let j = 0; j < map[i].length; j++) {
            if(map[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}

function findSynchDischargeStep(map) {
    let step = 0;
    while(!allZeros(map)) {
        simulateSingleStep(map);
        step++;
    }
    return step;
}

let step = findSynchDischargeStep(data);
console.log(step);