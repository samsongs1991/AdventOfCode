const Module = require('../module.js');
const data = Module.extractHorizontalPositions('./data.txt');

// ==============
// Day_7 - Part 1
// ==============

function findMax(data) {
    let max = 0;
    data.forEach(num => {
        if(num > max) { max = num }
    });
    return max;
}

// function findBestPos(data) {
//     const max = findMax(data);
//     const fuelConsumptions = [];
//     for(let i = 0; i <= max; i++) {
//         let totalFuel = 0;
//         for(let j = 0; j < data.length; j++) {
//             let pos = data[j];
//             totalFuel += Math.abs(pos - i);
//         }
//         fuelConsumptions.push(totalFuel);
//     }
//     let small = fuelConsumptions[0];
//     for(let i = 1; i < fuelConsumptions.length; i++) {
//         if(fuelConsumptions[i] < small) { small = fuelConsumptions[i] }
//     }
//     return small;
// }
// const testData = [16,1,2,0,4,2,7,1,2,14];
// const pos = findBestPos(data);
// console.log(pos);

// answer = horizontal pos 2
// fuel used = 37
// pos 1, fuel 41
// pos 3, fuel 39
// pos 10, fuel 71

// ==============
// Day_7 - Part 2
// ==============

function calcFuelCost(start, end) {
    let totalCost = 0;
    let stepCost = 1;
    for(let i = start; 
        start < end ? i < end : i > end; 
        start < end ? i++ : i--) {
        totalCost += stepCost;
        stepCost++;
    }
    return totalCost;
}

function findBestPos(data) {
    const max = findMax(data);
    const fuelConsumptions = [];
    for(let i = 0; i <= max; i++) {
        let totalFuel = 0;
        for(let j = 0; j < data.length; j++) {
            let pos = data[j];
            totalFuel += calcFuelCost(pos, i);
        }
        fuelConsumptions.push(totalFuel);
    }
    let small = fuelConsumptions[0];
    for(let i = 1; i < fuelConsumptions.length; i++) {
        if(fuelConsumptions[i] < small) { small = fuelConsumptions[i] }
    }
    return small;
}
const testData = [16,1,2,0,4,2,7,1,2,14];
const pos = findBestPos(data);
console.log(pos);

// answer = pos 5
// fuel = 168