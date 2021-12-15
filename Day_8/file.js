const Module = require('../module.js');
const data = Module.extractEntries('./data.txt');
const testData = Module.extractEntries('./testData.txt');

const testSignal = ['acedgfb','cdfbe','gcdfa','fbcad','dab','cefabd','cdfgeb','eafb','cagedb','ab'];
// const testOutput = [cdfeb,fcadb,cdfeb,cdbaf]

// ==============
// Day_7 - Part 1
// ==============

const code = [
    'abcefg', 
    'cf',
    'acdeg', // 5 
    'acdfg', // 5
    'bcdf',
    'abdfg', // 5 
    'abdefg', 
    'acf',
    'abcdefg',
    'abcdfg'
];

function countOutputs(outputs, lengths) {
    let count = 0;
    for(let i = 0; i < outputs.length; i++) {
        let output = outputs[i];
        output = output.split(' ');
        for(let j = 0; j < output.length; j++) {
            let digit = output[j];
            if(lengths.includes(digit.length)) { count++ }
        }
    }
    return count;
}
const lengths = [2, 4, 3, 7];
console.log(countOutputs(data.outputs, lengths));

// ==============
// Day_7 - Part 2
// ==============

