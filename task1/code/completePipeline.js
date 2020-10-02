const {
    pipeline
} = require('stream');
const fs = require('fs');

module.exports = (readStream, output, action, shift) => {
    pipeline(
        readStream,
        require('./transform')(action, shift),
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