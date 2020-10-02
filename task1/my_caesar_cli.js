const params = require('./code/args');
const {
    pipeline
} = require('stream');
const ConsoleHandler = require('./code/ConsoleHandler')
const FileHandler = require('./code/FileHandler')

const {
    input,
    output
} = require('./code/streams')(params);

if (input) {
    FileHandler(input, output, params.action, params.shift);
} else {
    ConsoleHandler(output, params.action, params.shift);
}