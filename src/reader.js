const path = require('path');
const ini = require('ini');
const fs = require('fs-extra');
const { formatLapTime } = require('./formatLapTime.js');

async function reader (path, carAndTrack, parsed) {
    try {
        if (parsed[carAndTrack]) {
            const date = new Date(parseInt(parsed[carAndTrack].DATE)).toLocaleString();
            const bestLap = formatLapTime(parseInt(parsed[carAndTrack].TIME))
            console.log(`\nLap time for ${carAndTrack}:`);
            console.log(`Date: ${date}`);
            console.log(`Best lap: ${bestLap}`);
        } else {
            console.log(`No data found for "${carAndTrack}".`);
        }
    } catch (err) {
        console.error('Error reading the file:', err);
    }
}

module.exports = { reader };