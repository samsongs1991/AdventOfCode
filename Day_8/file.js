const Module = require('../module.js');
const data = Module.extractEntries('./data.txt');
const testData = Module.extractEntries('./testData.txt');

// const testSignal = ['acedgfb','cdfbe','gcdfa','fbcad','dab','cefabd','cdfgeb','eafb','cagedb','ab'];
// const testOutput = [cdfeb,fcadb,cdfeb,cdbaf]

// ==============
// Day_7 - Part 1
// ==============

const code = [
    'cf', // 1
    'acf', // 7
    'bcdf', // 4
    'abcdefg', // 8

    'acdeg', // 2 
    'acdfg', // 3 
    'abdfg', // 5  
    
    'abcefg', // 0 
    'abdefg', // 6 
    'abcdfg', // 9 
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
// console.log(countOutputs(data.outputs, lengths));

// ==============
// Day_7 - Part 2
// ==============

function findSet1(signal) {
    let set1 = [];
    signal.forEach(segment => {
        if(segment.length === 2 || segment.length === 3 || 
            segment.length === 4 || segment.length === 7) {
            set1.push(segment.split('').sort().join(''));
        }
    });
    return set1;
}
function findSet2(signal) {
    let set2 = [];
    signal.forEach(segment => {
        if(segment.length === 5) {
            set2.push(segment.split('').sort().join(''));
        }
    });
    return set2;
}
function findSet3(signal) {
    let set3 = [];
    signal.forEach(segment => {
        if(segment.length === 6) {
            set3.push(segment.split('').sort().join(''));
        }
    });
    return set3;
}
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
    return diffs.split('').sort().join('');
}
function findDiffFromTo(str1, str2) {
    for(let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if(!str2.includes(char)) { return char }
    }
}
function findSingleCommonality(str1, str2) {
    for(let i = 0; i < str1.length; i++) {
        let char = str1[i];
        if(str2.includes(char)) { return char }
    }
    for(let i = 0; i < str2.length; i++) {
        let char = str2[i];
        if(str1.includes(char)) { return char }
    }
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
    
    // 2's unique difference (e) is pos 4
    // 5's unique difference (b) is pos 1
    // 2's commonality with 1 (c) is pos 2
    // 5's commonality with 1 (f) is pos 5

    let cf = findSegmentOfLength(signal, 2);
    let acf = findSegmentOfLength(signal, 3);
    let bcdf = findSegmentOfLength(signal, 4);
    let bd = findAllDiffs(cf, bcdf);
    // ====================
    let three = findSegmentWithChars(set2, cf);
    let five = findSegmentWithChars(set2, bd);
    let two = null;
    set2.forEach(segment => {
        segment = segment.split('').sort().join('');
        if(segment !== three && segment !== five) { two = segment }
    });
    CODE[three] = '3';
    CODE[five] = '5';
    CODE[two] = '2';
    // ====================
    let e = findDiffFromTo(two, three);
    let b = findDiffFromTo(five, three);
    let c = findSingleCommonality(two, cf);
    let f = findSingleCommonality(five, cf);
    WIRING[4] = e;
    WIRING[1] = b;
    WIRING[2] = c;
    WIRING[5] = f
}
function loadSet3(signal) {
    // set 3: use the correct wiring pattern to know what 0/6/9 are
    let a = WIRING[0];
    let b = WIRING[1];
    let c = WIRING[2];
    let e = WIRING[4];
    let f = WIRING[5];
    
    let zero = findSegmentWithChars(set3, a + b + c + e + f);
    let eight = findSegmentOfLength(set1, 7);

    let d = findSingleDiff(zero, eight);
    let g = findSingleDiff(zero, a + b + c + e + f); 
    WIRING[3] = d;
    WIRING[6] = g;

    let six  = findSegmentWithChars(set3, a + b + d + e + f + g);
    let nine = findSegmentWithChars(set3, a + b + c + d + f + g);
    CODE[zero] = '0';
    CODE[six]  = '6';
    CODE[nine] = '9';
}
function loadSets(signal) {
    loadSet1(signal);
    loadSet2(signal);
    loadSet3(signal);
}

let WIRING = new Array(7);
let CODE = {};

let sum = 0;
let set1 = null;
let set2 = null;
let set3 = null;

for(let i = 0; i < data.signals.length; i++) {
    WIRING = new Array(7);
    CODE = {};
    set1 = null;
    set2 = null;
    set3 = null;

    let signal = data.signals[i].split(' ');
    let output = data.outputs[i].split(' ');
    set1 = findSet1(signal);
    set2 = findSet2(signal);
    set3 = findSet3(signal);
    loadSets(signal);
    let outputString = '';
    output.forEach(digit => {
        digit = digit.split('').sort().join('');
        outputString += CODE[digit];
    });
    sum += parseInt(outputString);
}

console.log(sum);