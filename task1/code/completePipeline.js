const {
    pipeline
} = require('stream');
const fs = require('fs');
const transform = require('./transform');

module.exports = (readStream, output, action, shift) => {
    pipeline(
        readStream,
        transform(action, shift),
        output ? fs.createWriteStream(output, {
            flags: 'a'
        }) : process.stdout,
        (err) => {
            if (err) {
                console.error('Pipeline failed.', err);
            }
        }
    );
}