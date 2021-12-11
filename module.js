const fs = require('fs');

// ============================================================
// Day_1 ======================================================
// ============================================================

function extractNums(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    const nums = [];
    let string = "";
    for(let i = 0; i < data.length; i++) {
        if(data[i] === "\n") {
            nums.push(parseInt(string));
            string = "";
        } else {
            string += data[i];
            if(i === data.length - 1) {
                nums.push(parseInt(string));
            }
        }
    }
    return nums;
}

exports.extractNums = extractNums;

// ============================================================
// Day_2 ======================================================
// ============================================================

function extractDirs(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    const dirs = [];
    const digits = "0123456789";

    let string = "";
    for(let i = 0; i < data.length; i++) {
        if(string !== "" || data[i] !== "\n") {
            string += data[i];
        }
        if(digits.includes(data[i])) {
            dirs.push(string.split(' '));
            string = "";
        }
    }

    return dirs;
}

exports.extractDirs = extractDirs;

// ============================================================
// Day_3 ======================================================
// ============================================================

function extractBinary(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    const binaries = [];

    let string = "";
    for(let i = 0; i < data.length; i++) {
        if(data[i] === "\n") {
            binaries.push(string);
            string = "";
        } else {
            string += data[i];
            if(i === data.length - 1) {
                binaries.push(string);
                string = "";
            }
        }
    }

    return binaries;
}

exports.extractBinary = extractBinary;

// ============================================================
// Day_4 ======================================================
// ============================================================

function extractDraws(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    const draws = data.split(',');
    return draws;
}

function extractBoards(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    const boards = data.split('\n\n');

    for(let i = 0; i < boards.length; i++) {
        let board = boards[i];
        board = board.split('\n');
        for(let j = 0; j < board.length; j++) {
            let row = board[j];
            row = row.split(' ');
            let temp = [];
            for(let k = 0; k < row.length; k++) {
                let tile = row[k];
                if(tile) { temp.push(tile) }
            }
            row = temp;
            board[j] = row;
        }
        boards[i] = board;
    }

    return boards;
}

exports.extractDraws = extractDraws;
exports.extractBoards = extractBoards;

// ============================================================
// Day_5 ======================================================
// ============================================================

function extractLines(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    const lines = data.split('\n');
    for(let i = 0; i < lines.length; i++) {
        let line = lines[i];
        line = line.split(' -> ');
        for(let j = 0; j < line.length; j++) {
            let pos = line[j].split(',');
            pos[0] = parseInt(pos[0]);
            pos[1] = parseInt(pos[1]);
            line[j] = pos;
        }
        lines[i] = line;
    }
    return lines;
}

exports.extractLines = extractLines;

// ============================================================
// Day_6 ======================================================
// ============================================================

function extractFishes(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    return data.split(',');
}

exports.extractFishes = extractFishes;

// ============================================================
// Day_7 ======================================================
// ============================================================

function extractHorizontalPositions(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    parsedData = data.split(',');
    for(let i = 0; i < parsedData.length; i++) {
        parsedData[i] = parseInt(parsedData[i]);
    }
    return parsedData;
}

exports.extractHorizontalPositions = extractHorizontalPositions;

// ============================================================
// Day_8 ======================================================
// ============================================================

