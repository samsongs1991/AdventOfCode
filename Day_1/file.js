const Module = require('../module.js');
const data = Module.extractNums('./data.txt');

// ==============
// Day 1 - Part 1
// ==============
let count = 0;
for(let i = 1; i < data.length; i++) {
    if(data[i] > data[i - 1]) {
        count++;
    }
}

console.log(count);

// ==============
// Day 1 - Part 2
// ==============
function countSlidingWindowInc(data) {
    let count = 0;
    
    for(let i = 1; i < data.length - 2; i++) {
        // console.log('=================================');
        // console.log(data[i - 1], data[i], data[i + 1]);
        // console.log(data[i], data[i + 1], data[i + 2]);

        let sum1 = 0;
        let sum2 = 0;
        sum1 = data[i - 1] + data[i] + data[i + 1];
        sum2 = data[i] + data[i + 1] + data[i + 2];
        if(sum2 > sum1) {
            count++;
        }
    }

    return count;
}

const result = countSlidingWindowInc(data);

console.log(result);