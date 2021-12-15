const Module = require('../module.js');
const data = Module.extractEntries('./data.txt');
const testData = Module.extractEntries('./testData.txt');

const testSignal = ['acedgfb','cdfbe','gcdfa','fbcad','dab','cefabd','cdfgeb','eafb','cagedb','ab'];
// const testOutput = [cdfeb,fcadb,cdfeb,cdbaf]

// ==============
// Day_7 - Part 1
// ==============

const code = [
    'cf', // 1
    'acdeg', // 2 
    'acdfg', // 3 
    'bcdf', // 4
    'abdfg', // 5 
    'acf', // 7
    'abcdefg', // 8
    'abcefg', // 0 * 
    'abdefg', // 6 * 
    'abcdfg', // 9 * 
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

const WIRING = new Array(7);
const CODE = {};

function findSet1(signal) {
    let set1 = [];
    signal.forEach(segment => {
        if(segment.length === 2 || segment.length === 3 || 
            segment.length === 4 || segment.length === 7) {
            set1.push(segment);
        }
    });
    return set1;
}
function findSet2(signal) {
    let set2 = [];
    signal.forEach(segment => {
        if(segment.length === 5) {
            set2.push(segment);
        }
    });
    return set2;
}
function findSet3(signal) {
    let set3 = [];
    signal.forEach(segment => {
        if(segment.length === 6) {
            set3.push(segment);
        }
    });
    return set3;
}
const set1 = findSet1(code);
const set2 = findSet2(code);
const set3 = findSet3(code);
console.log(set1);
console.log(set2);
console.log(set3);

function findSegmentOfLength(signal, num) {
    let result = null;
    signal.forEach(segment => {
        if(segment.length === num) {
            result = segment.split('').sort().join('');
        }
    });
    return result;
}
function findSingleDiff(str1, str2) {
    const count = {a:0, b:0, c:0, d:0, e:0, f:0, g:0};
    str1.split('').forEach(char => count[char]++);
    str2.split('').forEach(char => count[char]--);
    for(let k in count) {
        if(count[k] !== 0 ) { return k }
    }
}
function findAllDiffs(str1, str2) {
    const count = {a:0, b:0, c:0, d:0, e:0, f:0, g:0};
    str1.split('').forEach(char => count[char]++);
    str2.split('').forEach(char => count[char]--);
    let diffs = '';
    for(let k in count) {
        if(count[k] !== 0 ) { diffs += k }
    }
    return diffs
}
function findSegmentWithChars(signal, ...args) {
    args = args.join('');
    let result = null;
    signal.forEach(segment => {
        let found = true;
        for(let i = 0; i < args.length; i++) {
            let char = args[i];
            if(!segment.includes(char)) {
                found = false;
            }
        }
        if(found) {
            result = segment.split('').sort().join('');
        }
    });
    return result;
}
function loadSet1(signal) {
    // set 1: difference between 'cf' and 'acf' (a) is pos 0 while 'cf' will be pos 2/5
    // set 1: difference between 'cf' and 'bcdf' (bd) is pos 1/3
    let one = findSegmentOfLength(signal, 2);
    let four = findSegmentOfLength(signal, 4);
    let seven = findSegmentOfLength(signal, 3);
    let eight = findSegmentOfLength(signal, 7);
    let a = findSingleDiff(one, seven);
    // let cf = one; // pos 2/5
    // let bd = findAllDiffs(one, four); // pos 1/3
    WIRING[0] = a;
    CODE[one] = '1';
    CODE[four] = '4';
    CODE[seven] = '7';
    CODE[eight] = '8';
}
function loadSet2(signal) {
    // set 2: the one with 'acf' and 'b or d' = 3 --> switch pos of 'b or d' to 3 and the other to pos 1, the last char (g) is pos 6
    // set 2: the one with 'a' and 'bd' and 'g' = 5 --> the other char (f) is pos 5 while 'c' is pos 2
    // set 2: the last segment = 2 --> the unique char (e) is pos 4
    let acf = findSegmentOfLength(signal, 3);
    let bd = findAllDiffs(findSegmentOfLength(signal, 2), findSegmentOfLength(signal, 4));
    let b = bd[0];
    let d = bd[1];
    let three = findSegmentWithChars(set2, acf, b);
    if(three) {
        // switch pos of b/d to 3 and other to 1
        WIRING[3] = b;
        WIRING[1] = d;
    } else {
        three = findSegmentWithChars(set2, acf, d);
        // switch pos of b/d to 3 and other to 1
        WIRING[3] = d;
        WIRING[1] = b;
    } 
    CODE[three] = '3';
    // last char = pos 6
}
function loadSet3(signal) {
    // set 3: use the correct wiring pattern to know what 0/6/9 are
}
loadSet1(code);
loadSet2(code);
loadSet3(code);