const Module = require('../module.js');
const data = Module.extractBinary('./data.txt');

// ==============
// Day 3 - Part 1
// ==============
function getGammaEpsilon(bits, data) {
    let gamma = "";
    let epsilon = "";

    for(let i = 1; i <= 12; i++) {
        if(bits[i] > data.length / 2) {
            gamma += "1";
            epsilon += "0";
        } else {
            gamma += "0";
            epsilon += "1";
        }
    }

    gamma = parseInt(gamma, 2);
    epsilon = parseInt(epsilon, 2);

    return [gamma, epsilon];
}

function calculatePowerConsumption(data) {
    const bits = {};
    for(let i = 1; i <=12; i++) {
        bits[i] = 0;
    }

    for(let i = 0; i < data.length; i++) {
        for(let j = 0; j < data[i].length; j++) {
            if(data[i][j] === '1') {
                bits[j + 1]++;
            }
        }
    }

    const gammaEpsilon = getGammaEpsilon(bits, data);
    const powerConsumption = gammaEpsilon[0] * gammaEpsilon[1];

    return powerConsumption;
}

const powerConsumption = calculatePowerConsumption(data);

console.log(powerConsumption);

// ==============
// Day 3 - Part 2
// ==============
function calcO2Rating(data) {
    const bits = {};
    for(let i = 1; i <= data[0].length; i++) {
        bits[i] = 0;
    }

    let O2 = "";

    for(let i = 0; i < data[0].length; i++) {
        let count = 0;
        let store = "";

        for(let j = 0; j < data.length; j++) {
            let binary = data[j];
            let bit = binary[i];

            if(i === 0 || binary.slice(0, i) === O2) {
                count++;
                store = binary;
                if(bit === "1") { bits[i + 1]++ };
            }
        }

        if(count === 1) { return parseInt(store, 2) };
        bits[i + 1] >= count / 2 ? O2 += "1" : O2 += "0";
    }

    return parseInt(O2, 2);
}

function calcCO2Rating(data) {
    const bits = {};
    for(let i = 1; i <= data[0].length; i++) {
        bits[i] = 0;
    }

    let CO2 = "";

    for(let i = 0; i < data[0].length; i++) {
        let count = 0;
        let store = "";

        for(let j = 0; j < data.length; j++) {
            let binary = data[j];
            let bit = binary[i];
            
            if(i === 0 || binary.slice(0, i) === CO2) {
                count++;
                store = binary;
                if(bit === "1") { bits[i + 1]++ };
            }
        }

        if(count === 1) { return parseInt(store, 2) };
        bits[i + 1] >= count / 2 ? CO2 += "0" : CO2 += "1";
    }

    return parseInt(CO2, 2);
}

const test = [
    "00100",
    "11110",
    "10110",
    "10111",
    "10101",
    "01111",
    "00111",
    "11100",
    "10000",
    "11001",
    "01010",
    "00010",
]

// Second way of solving puzzle using arrays - Brute force method
function calcLifeSupportRating(data) {
    let O2Array = data;
    let tempArray = [];
    let count = 0;

    for(let i = 0; i < O2Array[0].length; i++) {
        
        for(let j = 0; j < O2Array.length; j++) {
            let binary = O2Array[j];
            let bit = binary[i]
            if(bit === "1") { count++ }
        }
        let chosenOne = "1";
        if(count < O2Array.length / 2) { chosenOne = "0" }
        for(let j = 0; j < O2Array.length; j++) {
            let binary = O2Array[j];
            let bit = binary[i];
            if(bit === chosenOne) {
                tempArray.push(binary);
            }
        }

        O2Array = tempArray;
        tempArray = [];
        count = 0;

        if(O2Array.length === 1) { break }
    }

    let CO2Array = data;
    tempArray = [];
    count = 0;

    for(let i = 0; i < CO2Array[0].length; i++) {
        
        for(let j = 0; j < CO2Array.length; j++) {
            let binary = CO2Array[j];
            let bit = binary[i]
            if(bit === "1") { count++ }
        }
        let chosenOne = "1";
        if(count >= CO2Array.length / 2) { chosenOne = "0" }
        for(let j = 0; j < CO2Array.length; j++) {
            let binary = CO2Array[j];
            let bit = binary[i];
            if(bit === chosenOne) {
                tempArray.push(binary);
            }
        }

        CO2Array = tempArray;
        tempArray = [];
        count = 0;

        if(CO2Array.length === 1) { break }
    }

    const O2Rating = parseInt(O2Array[0], 2);
    const CO2Rating = parseInt(CO2Array[0], 2);
    return O2Rating * CO2Rating;
}

const O2Rating = calcO2Rating(data);
console.log("O2Rating", O2Rating);
const CO2Rating = calcCO2Rating(data);
console.log("CO2Rating", CO2Rating);
const lifeSupportRating = O2Rating * CO2Rating;
console.log("lifeSupportRating", lifeSupportRating)
console.log("2nd solution", calcLifeSupportRating(data));