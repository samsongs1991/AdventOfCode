const Module = require('../module.js');
const data = Module.extractCaveMap('./data.txt');
const testData1 = Module.extractCaveMap('./testData1.txt');
const testData2 = Module.extractCaveMap('./testData2.txt');
const testData3 = Module.extractCaveMap('./testData3.txt');

// ===============
// Day_12 - Part 1
// ===============

// console.log(data);
// console.log(testData1);
// console.log(testData2);
// console.log(testData3);

class Cave {
 
    constructor(name) {
        this.name = name;
        this.type = name[0] == name[0].toUpperCase() ? "big" : "small";
        this.paths = [];
    }

    pathTo(cave) {
        this.paths.push(cave);
        return this.paths;
    }
    
    
    
}

let A = new Cave("A");
console.log(A.name)
console.log(A.type)
console.log(A.pathTo(new Cave("b")))
// ===============
// Day_12 - Part 2
// ===============


