const Module = require('../module.js');
const data = Module.extractHeightMap('./data.txt');
const testData = Module.extractHeightMap('./testData.txt');

// ==============
// Day_9 - Part 1
// ==============

const DIRS = [
             [-1, 0], 
    [ 0,-1],          [ 0, 1],
             [ 1, 0], 
];

// iterate through every pos on the ht map
// check if it is the lowest point among it's adjacent positions
// if it's a low point, increment counter

function findLowPoints(map) {
    let sum = 0;
    for(let row = 0; row < map.length; row++) {
        for(let col = 0; col < map[row].length; col++) {
            let val = map[row][col];
            let valIsLowestPt = true;
            for(let i = 0; i < DIRS.length; i++) {
                let dir = DIRS[i];
                let row2 = dir[0] + row;
                let col2 = dir[1] + col;
                if(map[row2] !== undefined && 
                    map[row2][col2] !== undefined && 
                    val >= map[row2][col2]) { 
                    valIsLowestPt = false 
                };
            }
            if(valIsLowestPt) { sum += val + 1 };
        }
    }
    return sum;
}

let numLowPoints = findLowPoints(data);
console.log(numLowPoints);

// ==============
// Day_9 - Part 2
// ==============

// helper fn to find a basin
// iterate through map
// once a basin is found find its sum and add to an array
// get three largest values from array and multiply together