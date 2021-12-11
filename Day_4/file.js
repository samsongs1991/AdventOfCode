const Module = require('../module.js');
const draws = Module.extractDraws('./draws.txt');
const boards = Module.extractBoards('./boards.txt');

// ==============
// Day 4 - Part 1
// ==============

function verticalWin(board, draws) {
    for(let i = 0; i < board[0].length; i++) {
        let count = 0;
        for(let j = 0; j < board.length; j++) {
            let tile = board[j][i];
            if(draws.includes(tile)) { count++ }
        }
        if(count === 5) { return true }
    }
    return false;
}
// const testBoard = boards[0];
// const testDraws = [ '31', '38', '22', '93', '33' ];
// console.log(verticalWin(testBoard, testDraws));


function horizontalWin(board, draws) {
    for(let i = 0; i < board.length; i++) {
        let count = 0;
        for(let j = 0; j < board[0].length; j++) {
            if(draws.includes(board[i][j])) { count++ }
        }
        if(count === 5) { return true }
    }
    return false;
}
// const testBoard = boards[0];
// const testDraws = [ '31', '5', '70', '8', '88' ];
// console.log(horizontalWin(testBoard, testDraws));


function diagonalWin(board, draws) {
    let count1 = 0;
    let count2 = 0;
    for(let i = 0; i < board.length; i++) {
        if(draws.includes(board[i][i])) { count1++ }
        if(draws.includes(board[i][board[i].length - 1 - i])) { count2++ }
    }
    if(count1 === 5 || count2 === 5) { return true }
    return false;
}
// const testBoard = boards[0];
// const testDraws = [ '31', '63', '17', '29', '73' ];
// const testDraws = [ '88', '91', '17', '52', '33' ];
// console.log(diagonalWin(testBoard, testDraws));

function win(board, draws) {
    return (
        verticalWin(board, draws) || 
        horizontalWin(board, draws)
    ) ? true : false;
}
// const testBoard = boards[0];
// const testDraws = [ '31', '38', '22', '93', '33' ];
// const testDraws = [ '31', '5', '70', '8', '88' ];
// const testDraws = [ '31', '63', '17', '29', '73' ];
// const testDraws = [ '88', '91', '17', '52', '33' ];
// console.log(win(testBoard, testDraws));

function findFirstWinningBoard(boards, draws) {
    const runningDraws = [];
    for(let i = 0; i < draws.length; i++) {
        runningDraws.push(draws[i]);
        for(let j = 0; j < boards.length; j++) {
            let board = boards[j];
            if(win(board, runningDraws)) { return [board, runningDraws] }
        }
    }
}
// const testDraws = [ '31', '38', '22', '93', '33' ];
// const testDraws = [ '31', '5', '70', '8', '88' ];
// const testDraws = [ '31', '63', '17', '29', '73' ];
// const testDraws = [ '88', '91', '17', '52', '33' ];
// console.log(findFirstWinningBoard(boards, testDraws));

function calculateScore(board, draws) {
    let sum = 0;
    for(let i = 0; i < board.length; i++) {
        let row = board[i];
        for(let j = 0; j < row.length; j++) {
            let tile = row[j];
            if(!draws.includes(tile)) {
                sum += parseInt(tile) ;
            }
        }
    }
    return sum * parseInt(draws[draws.length - 1]);
}
// const testDraws = [ '31', '38', '22', '93', '33' ];
const testBoards = [
    [[22, 13, 17, 11,  0],
    [ 8,  2, 23,  4, 24],
    [21,  9, 14, 16,  7],
    [ 6, 10,  3, 18,  5],
    [ 1, 12, 20, 15, 19]],
    
    [[ 3, 15,  0,  2, 22],
    [ 9, 18, 13, 17,  5],
    [19,  8,  7, 25, 23],
    [20, 11, 10, 24,  4],
    [14, 21, 16, 12,  6]],

    [[14, 21, 17, 24,  4],
    [10, 16, 15,  9, 19],
    [18,  8, 23, 26, 20],
    [22, 11, 13,  6,  5],
    [ 2,  0, 12,  3,  7]],
   
]
const testDraws = [7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1];
// const winningBoard = findFirstWinningBoard(boards, draws);
// console.log(calculateScore(winningBoard[0], winningBoard[1]));

// ==============
// Day 4 - Part 2
// ==============

function findLastWinningBoard(boards, draws) {
    const runningDraws = [];
    let winningBoards = [];
    for(let i = 0; i < draws.length; i++) {
        runningDraws.push(draws[i]);
        for(let j = 0; j < boards.length; j++) {
            let board = boards[j];
            if(win(board, runningDraws) && !winningBoards.includes(j)) { winningBoards.push(j) }
        }
        if(winningBoards.length === boards.length) { break }
    }
    const index = winningBoards[winningBoards.length - 1];
    const losingBoard = boards[index];
    return [losingBoard, runningDraws];
}
const losingBoard = findLastWinningBoard(boards, draws);
console.log(calculateScore(losingBoard[0], losingBoard[1]));