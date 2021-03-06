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

function extractEntries(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    const entries = data.split('\n');
    const signals = [];
    const outputs = [];
    for(let i = 0; i < entries.length; i++) {
        let temp = entries[i].split(' | ');
        signals.push(temp[0]);
        outputs.push(temp[1]);
    }
    return {
        signals: signals, 
        outputs: outputs
    };
}

exports.extractEntries = extractEntries;

// ============================================================
// Day_9 ======================================================
// ============================================================

function extractHeightMap(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    let map = data.split('\n');
    map = map.map(row => { return row.split('') });
    map = map.map(row => { return row.map(ht => { return parseInt(ht) }) });
    return map;
}

exports.extractHeightMap = extractHeightMap;

// ============================================================
// Day_10 =====================================================
// ============================================================

function extractSubsystem(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    let subsystem = data.split('\n');
    return subsystem;
}

exports.extractSubsystem = extractSubsystem;

// ============================================================
// Day_11 =====================================================
// ============================================================

function extractEnergyLvls(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    let energyLvls = data.split('\n');
    energyLvls = energyLvls.map(row => row = row.split('').map(num => parseInt(num)) );
    return energyLvls;
}

exports.extractEnergyLvls = extractEnergyLvls;

// ============================================================
// Day_12 =====================================================
// ============================================================

function extractCaveMap(filepath) {
    const data = fs.readFileSync(filepath, 'utf8');
    return data.split('\n').map(path => path.split('-'));
}

exports.extractCaveMap = extractCaveMap;

// ============================================================
// Day_13 =====================================================
// ============================================================

// function extract(filepath) {
//     const data = fs.readFileSync(filepath, 'utf8');
// }

// exports.extract = extract;

// ============================================================
// Day_14 =====================================================
// ============================================================

// function extract(filepath) {
//     const data = fs.readFileSync(filepath, 'utf8');
// }

// exports.extract = extract;

// ============================================================
// Day_15 =====================================================
// ============================================================

// function extract(filepath) {
//     const data = fs.readFileSync(filepath, 'utf8');
// }

// exports.extract = extract;

// ============================================================
// Day_16 =====================================================
// ============================================================

// function extract(filepath) {
//     const data = fs.readFileSync(filepath, 'utf8');
// }

// exports.extract = extract;

// ============================================================
// Day_17 =====================================================
// ============================================================

// function extract(filepath) {
//     const data = fs.readFileSync(filepath, 'utf8');
// }

// exports.extract = extract;

// ============================================================
// Day_18 =====================================================
// ============================================================

// function extract(filepath) {
//     const data = fs.readFileSync(filepath, 'utf8');
// }

// exports.extract = extract;

// ============================================================
// Day_19 =====================================================
// ============================================================

// function extract(filepath) {
//     const data = fs.readFileSync(filepath, 'utf8');
// }

// exports.extract = extract;