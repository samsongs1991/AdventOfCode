const Module = require('../module.js');
const data = Module.extractSubsystem('./data.txt');
const testData = Module.extractSubsystem('./testData.txt');

// ===============
// Day_10 - Part 1
// ===============

// for each line, find the first illegal char
// add the score to a sum
// ): 3 points
// ]: 57 points
// }: 1197 points
// >: 25137 points

// steps
// how to find an illegal char
// use of a stack
// 
// find it and print
// THEN
// make an object to look up score values
// instead of printing add it to a sum

const CHUNKS = {
    open: '([{<',
    close: ')]}>',
}

const SCORES = {
    ')': 3, 
    ']': 57, 
    '}': 1197, 
    '>': 25137,
}

function isValidClose(open, close) {
    let openIdx = CHUNKS.open.indexOf(open);
    let closeIdx = CHUNKS.close.indexOf(close);
    return openIdx === closeIdx;
}

function findFirstIllegalChar(line) {
    const stack = [];
    for(let i = 0; i < line.length; i++) {
        let char = line[i];
        if(CHUNKS.open.includes(char)) {
            stack.push(char);
        } else {
            let last = stack[stack.length - 1];
            if(isValidClose(last, char)) {
                stack.pop();
            } else {
                return char;
            }
        }
    }
    return stack.length === 0 ? "green" : "red";
}

function findTotalSyntaxErrorScore(data) {
    let sum = 0;
    for(let i = 0; i < data.length; i++) { 
        let line = data[i];
        let illegalChar = findFirstIllegalChar(line);
        if(illegalChar !== 'green' && illegalChar !== 'red') {
            sum += SCORES[illegalChar];
        }
    }
    return sum;
}

let sum = findTotalSyntaxErrorScore(data);
console.log('========================================');
console.log('Total syntax error score is', sum);
console.log('========================================');

// ===============
// Day_10 - Part 2
// ===============


