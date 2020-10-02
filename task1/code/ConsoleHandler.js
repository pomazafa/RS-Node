const readline = require('readline');
const {
    pipeline
} = require('stream');
const createReadableStream = require('./createReadableStream')
const completePipeline = require('./completePipeline')
const fs = require('fs');

module.exports = (output, action, shift) => {

    const rl = readline.createInterface({
        input: process.stdin
    });

    rl.on('line', (text) => {
        const readstr = createReadableStream(text);

        completePipeline(readstr, output, action, shift);
    });
}