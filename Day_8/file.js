const Module = require('../module.js');
const data = Module.extractEntries('./data.txt');
const testData = Module.extractEntries('./testData.txt');

// const testSignals = [acedgfb,cdfbe,gcdfa,fbcad,dab,cefabd,cdfgeb,eafb,cagedb,ab];
// const testOutputs = [cdfeb,fcadb,cdfeb,cdbaf]

// ==============
// Day_7 - Part 1
// ==============

const code = {
    0: ['a', 'b', 'c',      'e', 'f', 'g'], // 6 
    1: [          'c',           'f'     ], // 2 *
    2: ['a',      'c', 'd', 'e',      'g'], // 5 
    3: ['a',      'c', 'd',      'f', 'g'], // 5 
    4: ['b',      'c', 'd',      'f'     ], // 4 *
    5: ['a', 'b',      'd',      'f', 'g'], // 5 
    6: ['a', 'b',      'd', 'e', 'f', 'g'], // 6 
    7: ['a',      'c',           'f'     ], // 3 *
    8: ['a', 'b', 'c', 'd', 'e', 'f', 'g'], // 7 *
    9: ['a', 'b', 'c', 'd',      'f', 'g']  // 6
}

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

