const Module = require('../module.js');
const data = Module.extractLines('./data.txt');

// ==============
// Day_5 - Part 1
// ==============

function findMaxPos(lines) {
    let x = 0;
    let y = 0;
    lines.forEach(line => {
        line.forEach(pos => {
            if(pos[0] > x) { x = pos[0] }
            if(pos[1] > y) { y = pos[1] }
        });
    });
    return [x, y];
}
// const max = findMaxPos(data);
// console.log(max);

function findLinePos(line) {
    let positions = [];
    if(line[0][0] === line[1][0] || line[0][1] === line[1][1]) {
        const start = line[0];
        const end = line[1];
        const xDiff = Math.abs(start[0] - end[0]);
        const deltaVar = xDiff === 0 ? 1 : 0;
        for(let i = start[deltaVar]; 
            start[deltaVar] < end[deltaVar] ? i <= end[deltaVar] : i >= end[deltaVar];
            start[deltaVar] < end[deltaVar] ? i++ : i--) {
            let pos = start.slice();
            pos[deltaVar] = i;
            positions.push(pos);
        }
    } else if(validDiag(line)) {
        positions = findDiagPos(line);
    }
    return positions;
}
// const line = [[0,10], [0,0]];
// const positions = findLinePos(line);

function createMap(lines) {
    const map = [];
    for(let i = 0; i < 1000; i++) {
        map.push([]);
        for(let j = 0; j < 1000; j++) {
            map[i].push(0);
        }
    }
    
    lines.forEach(line => {
        let positions = findLinePos(line);
        positions.forEach(pos => {
            map[pos[0]][pos[1]]++;
        });
    });
    
    return map;
}
const testData = [
    [[0,9], [5,9]],
    [[8,0], [0,8]],
    [[9,4], [3,4]],
    [[2,2], [2,1]],
    [[7,0], [7,4]],
    [[6,4], [2,0]],
    [[0,9], [2,9]],
    [[3,4], [1,4]],
    [[0,0], [8,8]],
    [[5,5], [8,2]],
];
const map = createMap(data);
// console.log(map);

function countDangerPts(map) {
    let count = 0;

    map.forEach(row => {
        row.forEach(pt => {
            if(pt >= 2) { count++ }
        })
    }); 
    
    return count;
}
const numDangerPts = countDangerPts(map);
console.log(numDangerPts);

// ==============
// Day_5 - Part 2
// ==============

function validDiag(line) {
    let start = line[0];
    let end = line[1];
    return Math.abs(start[0] - end[0]) === Math.abs(start[1] - end[1]);
}
// const line = [[2,2], [4,0]]; // true
// const line = [[0,0], [5,4]]; // false
// const line = [[1,1], [3,3]]; // true
// const line = [[9,7], [7,9]]; // true
// console.log(validDiag(line));

function findDiagPos(line) {
    let start = line[0];
    let end = line[1];
    let positions = [];

    let pos = start.slice();
    let count = Math.abs(start[0] - end[0]);
    let deltaX = start[0] - end[0] < 0 ? 1 : -1;
    let deltaY = start[1] - end[1] < 0 ? 1 : -1;
    positions.push(pos);
    while(count > 0) {
        pos = [pos[0] + deltaX, pos[1] + deltaY];
        positions.push(pos);
        count--;
    }
    
    return positions;
}
// const line = [[1,1], [3,3]];
// const line = [[9,7], [7,9]];
// const positions = findDiagPos(line);
// console.log(positions);