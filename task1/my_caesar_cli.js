const params = require('./code/args');
const {
    pipeline
} = require('stream');
const fs = require('fs');




console.dir(params);

const {
    input,
    output
} = require('./code/streams')(params);

if (input) {
    pipeline(
        input,
        output ? fs.createWriteStream(output) : process.stdout,
        (err) => {
            if (err) {
                console.error('Pipeline failed.', err);
            } else {
                console.log('Pipeline succeeded.');
            }
        }
    );
} else {

}