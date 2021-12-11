const Module = require('../module.js');
const fishes = Module.extractFishes('./data.txt');

// ==============
// Day_6 - Part 1
// ==============

// function countFishPopulation(data, days) {
//     let fishes = data.slice();
//     for(let day = 1; day <= days; day++) {
//         let newFishes = [];
//         for(let i = 0; i < fishes.length; i++) {
//             if(fishes[i] === 0) {
//                 fishes[i] = 6;
//                 newFishes.push(8);
//             } else {
//                 fishes[i]--;
//             }
//         }
//         fishes = fishes.concat(newFishes);
//     }
//     return fishes.length;
// }

// let fishes = [3,4,3,1,2];
// console.log(countFishPopulation(fishes));

// ==============
// Day_6 - Part 2
// ==============

// function countFishPopulation(data, days) {
//     if(days === 1) {
//         return data.length;
//     }

//     let fishes = data.slice();
//     let newFishes = [];
//     let count = fishes.length;
//     while(days > 0) {
//         days--;
//         for(let i = 0; i < fishes.length; i++) {
//             if(fishes[i] === 0) {
//                 fishes[i] = 6;
//                 newFishes.push(8);
//             } else {
//                 fishes[i]--;
//             }
//         }
//         if(newFishes.length > 0) {
//             count += countFishPopulation(newFishes, days);
//         }
//         newFishes = [];
//     }
//     return count;
// }

// function countFishPopulation(data, days) {
//     let fishes = data.slice();
//     let count = fishes.length;
//     for(let i = 0; i < data.length; i++) {
//         let fish = data[i];
//         count += calcOffspring(fish, days);
//     }
//     return count;
// }

// function calcOffspring(fish, days) {
//     let count = 0;
//     days = days - (fish + 1);
//     if(days < 0) {
//         return 0;
//     } else if (days === 0) {
//         return 1;
//     } else {
//         count++;
//         count += calcOffspring(8, days);
//         offspring = Math.floor(days / 7);
//         count += offspring;
//         for(let i = 1; i <= offspring; i++) {
//             count += calcOffspring(8, days - (7 * i))
//         }
//     }
//     return count;
// }

function countFishPopulation(data, days) {
    const store = {};
    for(let i = 0; i <= 9; i++) {
        store[i] = 0;
    }
    data.forEach(fish => store[fish]++);

    for(let i = 1; i <= days; i++) {
        for(let j = 0; j <= 9; j++) {
            store[j];
            if(store[j] > 0) {
                if(j === 0) {
                    store[9] = store[j];
                    store[7] = store[7] + store[j];
                    store[j] = 0;
                } else {
                    store[j - 1] = store[j];
                    store[j] = 0;
                }
            }
        }
    }

    let count = 0;

    for(let k in store) {
        count += store[k];
    }
    
    return count;
}

// let fishes = [3,4,3,1,2];
// const fish = 6;
// const days = 60;
// console.log(calcOffspring(fish, days));
console.log(countFishPopulation(fishes, 0)); // 5
console.log(countFishPopulation(fishes, 1)); // 5
console.log(countFishPopulation(fishes, 5)); // 10
console.log(countFishPopulation(fishes, 10)); // 12
console.log(countFishPopulation(fishes, 15)); // 20
console.log(countFishPopulation(fishes, 18)); // 26
console.log(countFishPopulation(fishes, 80)); // 5934
console.log(countFishPopulation(fishes, 256));