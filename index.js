const path = require('path');
const readline = require('readline');
const fs = require('fs-extra');
const ini = require('ini');

const { reader } = require('./src/reader.js');

// Assetto Corsa personal best file path
const PERSONAL_BEST_PATH = path.join('C:', 'Users', 'dante', 'OneDrive', 'Documentos', 'Assetto Corsa', 'personalbest.ini');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Reading laps file and parsing it
const raw = fs.readFileSync(PERSONAL_BEST_PATH, 'utf-8');
const parsed = ini.parse(raw);

console.log('These are all the cars\n');
// Showing elements before the @
Object.keys(parsed).forEach(key => {
    console.log(key.split('@')[0]);
});

rl.question('Please enter a car: ', (car) => {
    console.log('These are all the tracks\n');
    // Showing elements with same car name after the @
    Object.keys(parsed).forEach(key => {
        if (car == key.split('@')[0])
            console.log(key.split('@')[1]);
});
    rl.question('Now please enter a track: ', (track) => {
        carAndTrack = car + '@' + track;
        reader(PERSONAL_BEST_PATH, carAndTrack, parsed);
        rl.close();
    });
  });